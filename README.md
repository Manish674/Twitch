# Streaming App
Fully CRUD app you can create, read, update, delete.  
  
## How to
1) Run npm start inside api, rtmpserver, twitch folder 
2) Create a stream by clicking on create button.
3) Open obs
4) Go to settings -> Stream
5) Change Service to custom and Server to **rtmp://localhost/live**
6) Finally, Stream key to id

## How to get id
1) Click on any random stream which will take you to localhost:3000/streams/**id**
2) Take the id and paste it to stream key
