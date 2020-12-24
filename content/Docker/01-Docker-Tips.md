# [Deleting all Images](https://stackoverflow.com/questions/44785585/how-to-delete-all-local-docker-images)

Using the Docker Quick Start Terminal in Windows:

```
docker rmi -f $(docker images -a -q)
```

This will remove all the Docker images

