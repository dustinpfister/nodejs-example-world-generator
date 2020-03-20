// distance between two points
exports.distance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

// get dir
exports.dirToPos = (obj, dir) => {
    let r = Math.PI * 2 / 4 * dir,
    dx = Math.round(Math.cos(r)),
    dy = Math.round(Math.sin(r));
    return {
        x: obj.x + dx,
        y: obj.y + dy
    };
};

// get a direction number (0 - 3) from one object to another
exports.getDirFromObjToObj = (obj1, obj2) => {
    let r = Math.atan2(obj1.y - obj2.y, obj1.x - obj2.x) + Math.PI,
    per = r / (Math.PI * 2),
    dir = Math.floor(4 * per) % 4;
    return dir;
};

// bounds
exports.setBounds = (state, obj) => {
    let point = {};
    point.x = obj.x > state.w ? state.w : obj.x;
    point.y = obj.y > state.h ? state.h : obj.y;
    point.x = obj.x < 1 ? 1 : point.x;
    point.y = obj.y < 1 ? 1 : point.y;
    return point;
};
