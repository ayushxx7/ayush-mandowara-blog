---
title: Docker Quick Tips
description: commands I had to use before deploying on production
date: "2020-12-24"
image: "docker.png"
author: "Ayush"
tags: ["docker", "windows"]
---

# [Deleting all Images](https://stackoverflow.com/questions/44785585/how-to-delete-all-local-docker-images)

Using the Docker Quick Start Terminal in Windows:

```
docker rmi -f $(docker images -a -q)
```

This will remove all the Docker images

# [Common Docker commands used everyday]()

Once you have a dockerfile you will most likely build it using:

```
docker build -t <name_of_image> .
```

Note that the `.` refers to the current directory, and hence, your Dockerfile must be present where you are running this command.
Afterwards, you may want to run the build:

```
docker run -p <docker_port>:<external_port> <name_of_image>
```

Here we are using optional flag of `-p` or `--publish` which specifies which port to listen to for incoming request,
and which port to direct it to for outgoing request. This is useful when deploying webapps.
The internal port will be the port you have exposed in the Dockerfile using `EXPOSE <portnumber>` command.

To show running processes

```
docker ps
```

To kill a process, use `docker ps` to get the `image_id` and use

```
docker stop <iamge_id>
```

Further, to remove an image, you can use:

```
docker rm -f <image_id>
```

Note that this will force remove any running containers as well (due the `-f` flag)

# [Docker Images for Python](https://stackoverflow.com/questions/49037742/why-does-it-take-ages-to-install-pandas-on-alpine-linux)

- Use Alpine for Python apps that have very limited dependencies, and the docker container size is to be kept at a bare minimum.
- Use the full Image for python (such as `FROM python-3.8.3`) when you want to install something like Pandas/Numpy/SciPy etc.

# [Remove volumes from Docker](https://docs.docker.com/engine/reference/commandline/volume_rm/)

List all volumes using:

```
docker volume ls
```

Remove volume named "volume_abc" by using volume rm command

```
docker volume rm volume_abc
```

