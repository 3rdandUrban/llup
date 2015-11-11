#!/usr/bin/env node

var toMarkdown = require('to-markdown');
var content = '';

process.stdin.resume();
process.stdin.on('data', function(buf) { content += buf.toString(); });
process.stdin.on('end', function() {
     console.log(toMarkdown(content));
});
