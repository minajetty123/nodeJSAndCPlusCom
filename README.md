# This project is to make the example of communication between C++ and nodejs
## a. go to cpp/lib4ffinew, and execute the following command: "node-gyp configure build", it will generate the C++ dll.
## b. go to /web, execute node "node index.js", to boot the node js program, which will load dll
## c. curl http://localhost:3000, to get the result from API hosted by node js via calculation by C++ sum function
