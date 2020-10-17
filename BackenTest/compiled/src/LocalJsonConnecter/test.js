"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AAtest = void 0;
// import fs from 'fs';
const path_1 = __importDefault(require("path"));
//maybe need to add "type": "module" in package.js
//need to add "esModuleInterop":true in tsconfig
class AAtest {
    test22() {
        const directoryPath = path_1.default.join(__dirname, '/../../../../StackPastaVsCode');
        console.log(directoryPath);
    }
}
exports.AAtest = AAtest;
