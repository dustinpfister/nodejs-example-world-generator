let path = require('path'),
fs = require('fs'),
promisify = require('util').promisify,
read = promisify(fs.readFile),
write = promisify(fs.writeFile);

let genMapSection = exports.genMapSection = (opt) => {
    opt = opt || {};
    let map = {};
    map.mapIndex = opt.mapIndex === undefined ? 0 : opt.mapIndex;
    map.cells = [];

    opt.width = opt.width || 12;
    opt.height = opt.height || 8;
    opt.forCell = opt.forCell || function (cell) {
        return cell;
    };

    let len = opt.width * opt.height,
    i = 0;
    while (i < len) {
        let cell = {
            i: i,
            x: i % opt.width,
            y: Math.floor(i / opt.width)
        };
        cell = opt.forCell(cell);
        map.cells.push(cell);
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
