"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strEnum = (o) => {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
};
exports.default = exports.strEnum;
//# sourceMappingURL=index.js.map