## Docker command to run the dockerfile

> docker build -t codeeducation-node-api .

#### This command will expose the application to your localhost on port 3000

> docker run --name node-api -p 3000:3000 codeeducation-node-api

#### If you do not want to expose it, run the following command

> docker run --name node-api codeeducation-node-api

#### and for getting the ip address of the container network run this command

> docker inspect node-api | grep IPAddress

#### and use the IPAddress for access the application on port 3000