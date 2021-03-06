#!/usr/bin/env node

let path = require('path'),
fs = require('fs'),
promisify = require('util').promisify,
read = promisify(fs.readFile),
write = promisify(fs.writeFile),

genMap = require('./gen_map.js');

// forMapSecOptions Default/Example
let forMapSecOptionsDefault =  function (msOpt, world) {
    let i = msOpt.secIndex,
    cx = Math.floor(world.width / 2),
    cy = Math.floor(world.height / 2),
    secX = i % 2,
    secY = Math.floor(i / 2),
    d = Math.sqrt(Math.pow(secX - cx, 2) + Math.pow(secY - cy, 2));
    msOpt.data = {
        secX: secX,
        secY: secY,
        val: d * 10 + 5
    };
    msOpt.forCell = function (cell) {
        cell.val = msOpt.data.val / (world.secWidth * world.secHeight);
        return cell;
    };
    return msOpt;
};

exports.genStaticWorldFolder = (target, opt) => {

    target = path.resolve(target === undefined ? process.cwd() : target);
    opt = opt || {};

    // variable map section size
    let world = genMap.genWorldMap({
            width: 3,
            height: 3,
            secWidth: 2,
            secHeight: 2,
            forMapSecOptions: opt.forMapSecOptions || forMapSecOptionsDefault
        });

    console.log(JSON.stringify(world));

};
