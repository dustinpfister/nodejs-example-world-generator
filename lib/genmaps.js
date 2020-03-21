let path = require('path'),
fs = require('fs'),
promisify = require('util').promisify,
read = promisify(fs.readFile),
write = promisify(fs.writeFile);

let genMapSection = exports.genMapSection = (opt) => {
    opt = opt || {};
    let map = {};
    map.mapIndex = opt.mapIndex === undefined ? 0 : opt.mapIndex;
    map.width = opt.width || 12;
    map.height = opt.height || 8;
    map.cells = [];

    let len = map.width * map.height,
    i = 0;
    while (i < len) {
        map.cells.push({
            i: i,
            x: i % map.width,
            y: Math.floor(i / map.width)
        });
        i += 1;
    }

    return map;

};

let genWorldMap = exports.genWorldMap = (opt) => {

    opt = opt || {};
    opt.forMapSection = (mapSec, world) => {
        return mapSec;
    };

    let world = {};
    world.width = opt.width || 2;
    world.height = opt.height || 1;
    world.secWidth = opt.secWidth || 4;
    world.secHeight = opt.secHeight || 2;
    world.sections = [];
    let len = world.width * world.height,
    i = 0;
    while (i < len) {
        let mapSec = genMapSection({

                mapIndex: i,
                width: opt.secWidth,
                height: opt.secHeight

            });
        world.sections.push(mapSec);
        i += 1;
    }
    return world;
};
