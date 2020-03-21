let path = require('path'),
fs = require('fs'),
promisify = require('util').promisify,
read = promisify(fs.readFile),
write = promisify(fs.writeFile);

let genMapSection = exports.genMapSection = (opt) => {
    opt = opt || {};
    let map = {};
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
