#!/usr/bin/env node

let genMap = require('./lib/genmaps.js');


let mapSec = genMap.genMapSection();

console.log(mapSec);