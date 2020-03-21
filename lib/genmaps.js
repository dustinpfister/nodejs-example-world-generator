let path = require('path'),
fs = require('fs'),
promisify = require('util').promisify,
read = promisify(fs.readFile),
write = promisify(fs.writeFile);

let genMapSection = exports.genMapSection = (opt) => {
    opt = opt || {};
    let map = {};
    map.secIndex = opt.secIndex === undefined ? 0 : opt.secIndex;
    map.cells = [];
    if (opt.data) {
        map.data = opt.data;
    }

    opt.secWidth = opt.secWidth || 12;
    opt.secHeight = opt.secHeight || 8;
    opt.forCell = opt.forCell || function (cell) {
        return cell;
    };

    let len = opt.secWidth * opt.secHeight,
    i = 0;
    while (i < len) {
        let cell = {
            i: i,
            x: i % opt.secWidth,
            y: Math.floor(i / opt.secWidth)
        };
        cell = opt.forCell(cell);
        map.cells.push(cell);
        i += 1;
    }

    return map;

};

let genWorldMap = exports.genWorldMap = (opt) => {

    opt = opt || {};
    opt.forMapSecOptions = opt.forMapSecOptions || function (mapSec, world) {
        return mapSec;
    };

    let world = {};
    world.width = opt.width || 2;
    world.height = opt.height || 1;
    //world.secWidth = opt.secWidth || 4;
    //world.secHeight = opt.secHeight || 2;
    world.sections = [];
    let len = world.width * world.height,
    i = 0;
    while (i < len) {
        let msOptions = {
            secIndex: i,
            secWidth: opt.secWidth || 4,
            secHeight: opt.secHeight || 2
        };
        msOptions = opt.forMapSecOptions(msOptions);
        let mapSec = genMapSection(msOptions);
        world.sections.push(mapSec);
        i += 1;
    }
    return world;
};
