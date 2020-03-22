#!/usr/bin/env node

let genMap = require('./lib/gen_map.js');

// variable map section size
let world = genMap.genWorldMap({
        width: 2,
        height: 2,
        forMapSecOptions: function (msOpt) {
            let secWidth = 1 + msOpt.secIndex;
            msOpt.secWidth = secWidth;
            msOpt.secHeight = 2;
            msOpt.data = {
                secWidth: secWidth
            };
            return msOpt;
        }
    });

console.log(JSON.stringify(world));
