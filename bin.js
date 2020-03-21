#!/usr/bin/env node

let genMap = require('./lib/genmaps.js');

//let mapSec = genMap.genMapSection();

let world = genMap.genWorldMap();

console.log(world);