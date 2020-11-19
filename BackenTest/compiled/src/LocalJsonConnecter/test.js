"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AAtest = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
//maybe need to add "type": "module" in package.js
//need to add "esModuleInterop":true in tsconfig
// npm install --save-dev @types/node
class AAtest {
    checkfile(directoryPath) {
        return __awaiter(this, void 0, void 0, function* () {
            ////////////Create File if it does not exist/////////////////////////////////
            if (!fs_1.default.existsSync(directoryPath)) {
                fs_1.default.mkdirSync(directoryPath);
            }
            const currentDirectoryPath = path_1.default.join(directoryPath, 'Favorite.json');
            if (!fs_1.default.existsSync(currentDirectoryPath)) {
                fs_1.default.writeFile(currentDirectoryPath, '', function (err) {
                    if (err) {
                        return console.error(err);
                    }
                    console.log("File created!");
                });
            }
            return currentDirectoryPath;
        });
    }
    writeJson(currentDirectoryPath, newStringObject) {
        return __awaiter(this, void 0, void 0, function* () {
            ////////////Read then add new Value////////////////////////////////////
            var file = fs_1.default.readFileSync(currentDirectoryPath, 'utf-8');
            console.log(file);
            let newJsonObject = JSON.parse(newStringObject);
            if (file == "") {
                file = '{"Favorite":[]}';
            }
            let oldJsonObject = JSON.parse(file);
            oldJsonObject['Favorite'].push(newJsonObject);
            console.log('================================');
            console.log(oldJsonObject);
            fs_1.default.writeFile(currentDirectoryPath, JSON.stringify(oldJsonObject), function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log("File added!");
            });
        });
    }
    test22() {
        return __awaiter(this, void 0, void 0, function* () {
            const os = require('os');
            console.log(os.homedir());
            //this will be in Document folder/StackOverflowHelper
            const directoryPath = path_1.default.join(os.homedir(), 'StackOverFlowHelper');
            console.log(directoryPath);
            const currentDirectoryPath = yield this.checkfile(directoryPath);
            console.log("test");
            var Site = "stackoverflow";
            var Title = "this is a test title";
            var ID = "000000";
            let newStringObject = '{"Site":"' + Site + '",' +
                '"Title":"' + Title + '",' +
                '"ID":"' + ID + '"}';
            yield this.writeJson(currentDirectoryPath, newStringObject);
        });
    }
}
exports.AAtest = AAtest;
