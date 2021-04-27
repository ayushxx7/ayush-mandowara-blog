---
title: AWS Operations using Python
description: Upload, Invalidate cache in AWS using Python
date: "2021-04-27"
image: "python.png"
author: "Ayush"
tags: ["python", "aws", "devops"]
---

# PURPOSE

Sharing a collection of snippets to perform common AWS operations such as Upload and Cache-Invalidation for S3 buckets, using Python.

## Prerequisites

You should have the following keys before starting:

- AWS Access Key
- AWS Secret Key
- AWS Distribution ID (optional, required for invalidating cache)

---

### In a hurry? Grab [this gist](https://gist.github.com/ayushxx7/35959f0cd83d4d5013fe18a14a3118bd).

---

### [How to Upload a file with public access on an S3 Bucket](https://gist.github.com/ayushxx7/35959f0cd83d4d5013fe18a14a3118bd)

```py heading="Upload a file to S3 Bucket"
import traceback

import boto3
from botocore.exceptions import NoCredentialsError


class AWSActions:
    def __init__(self):
        self.ACCESS_KEY = '--your key--'
        self.SECRET_KEY = '--your secret key--'
                               aws_secret_access_key=self.SECRET_KEY)
        self.s3 = boto3.client('s3', aws_access_key_id=self.ACCESS_KEY,
                               aws_secret_access_key=self.SECRET_KEY)

    def upload_to_aws(self, local_file, bucket, s3_file):
        """Uploads file to S3 Bucket with Public Read access
        Files uploaded have GET request have support
        Assumes that the uploaded file will be JSON
        Parameters
        ----------
        local_file: str
            file (path) to be uploaded
        bucket: str
            aws s3 bucket
        s3_file: str
           path where file be placed in the s3 bucket
        Returns
        -------
        bool
            True if file upload was successful
        """
        try:
            s3_file = s3_file.strip('/')
            self.s3.upload_file(local_file, bucket, s3_file, ExtraArgs={
                                    'CacheControl' : 'max-age=1209600',
                                    'ContentType': 'application/json',
                                    'ACL': 'public-read'})
            return True
        except FileNotFoundError:
            print("The file was not found")
            return False
        except NoCredentialsError:
            print("Credentials not available")
            return False
        except:
            print(traceback.format_exc())
            return None

if __name__ == '__main__':
    upload = AWSActions()
    uploaded = upload.upload_to_aws(
        local_file=r'pop.json', bucket='--your bucket name--',
        s3_file='/folder_path/file_name.json'
    )
    print('Uploaded:', uploaded)
```

**Note**: If you don't want the access to be public, remove the `ACL` key in the `ExtraArgs` dictionary passed to `upload_file` function.

---

### How to Invalidate Cache of a File in S3 Bucket

```py heading="Invalidate Cache for a file in AWS"
import time

import boto3

class AWSActions:
    def __init__(self):
        self.ACCESS_KEY = '--your key--'
        self.SECRET_KEY = '--your secret key--'
        self.distributionId = '--your distribution id---'
        self.cf = boto3.client('cloudfront', aws_access_key_id=self.ACCESS_KEY,
                               aws_secret_access_key=self.SECRET_KEY)

    def createInvalidation(self, paths):
        """Invalidates existing files on cdn
        This removes file from S3 cache, so that latest version of the file is served on request
        Note that it is more of a request than a command (s3 may or may not immediately update the file)
        If file changes are not reflected after invalidation request, pass in additional query parameter
        Example:
            https://cdn.yourcompany.com/folder_name/file_name.json - old file
            https://cdn.yourcompany.com/folder_name/file_name.json?rand_param=123junk - new file
        Parameters
        ----------
        paths
            file paths on s3 bucket that need to be invalidated
        Returns
        -------
        dict
            Invalidation request object
        """
        try:
            milliseconds=str(round(time.time() * 1000))
            print("CallerReference:", milliseconds)
            InvalidationBatch = {
                'Paths': {
                    'Quantity': int(len(paths)),
                    'Items': paths
                },
                'CallerReference': milliseconds
            }
            invalidation = self.cf.create_invalidation(
                DistributionId=self.distributionId,
                InvalidationBatch=InvalidationBatch
            )
            return invalidation
        except:
            return None

if __name__ == '__main__':
    upload = AWSActions()
    invalidated = upload.createInvalidation(
        paths=[f'/folder_path/file_name.json']
    )
    print('Invalidated:', invalidated)
```
