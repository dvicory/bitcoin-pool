#!/usr/bin/env node

var jayson = require('jayson');

var server = jayson.server({
  echo: function(input, callback) {
    callback(null, input);
  }
});

server.http().listen(8337);

console.log('Server running on port 8337')
