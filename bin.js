#!/usr/bin/env node

let genMap = require('./lib/genmaps.js');

//let mapSec = genMap.genMapSection();

let world = genMap.genWorldMap({
        width: 2,
        height: 2,
        secWidth: 2,
        secHeight: 2,
		forMapSecOptions: function(msOptions){ return msOptions;}
    });

console.log(JSON.stringify(world));
