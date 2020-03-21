#!/usr/bin/env node

let genMap = require('./lib/genmaps.js');

// variable map section size
let world = genMap.genWorldMap({
        width: 3,
        height: 3,
        secWidth: 2,
        secHeight: 2,
        forMapSecOptions: function (msOpt) {
            let i = msOpt.secIndex,
            secX = i % 2,
            secY = Math.floor(i / 2),
            d = Math.sqrt(Math.pow(secX - 1, 2) + Math.pow(secY - 1, 2));
            msOpt.data = {
                secX: secX,
                secY: secY,
                val: d * 10 + 5
            };
            msOpt.forCell = function (cell) {
                cell.val = msOpt.data.val / (2 * 2);
                return cell;
            };
            return msOpt;
        }
    });

console.log(JSON.stringify(world));
