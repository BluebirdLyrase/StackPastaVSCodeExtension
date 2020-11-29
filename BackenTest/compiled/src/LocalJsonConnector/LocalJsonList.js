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
exports.LocalJsonList = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const JSONFile_1 = require("./JSONFile");
//maybe need to add "type": "module" in package.js
//need to add "esModuleInterop":true in tsconfig
// npm install --save-dev @types/node
class LocalJsonList extends JSONFile_1.JSONFile {
    constructor(filename) {
        super();
        this.os = require('os');
        this.directoryPath = path_1.default.join(this.os.homedir(), 'StackOverFlowHelper');
        this.delConfrimMsg = "Are you sure you want to delete this?";
        this.filePath = path_1.default.join(this.directoryPath, filename + ".json");
        this.arrayName = filename;
        this.createJson();
    }
    get getJsonObject() {
        return this.jsonObject;
    }
    checkfile() {
        return __awaiter(this, void 0, void 0, function* () {
            ////////////Create File if it does not exist/////////////////////////////////
            if (!fs_1.default.existsSync(this.directoryPath)) {
                fs_1.default.mkdirSync(this.directoryPath);
            }
            if (!fs_1.default.existsSync(this.filePath)) {
                try {
                    fs_1.default.writeFile(this.filePath, "{\"" + this.arrayName + "\":[]}", function (err) {
                        if (err) {
                            return console.error(err);
                        }
                        console.log("File created!");
                    });
                }
                catch (_a) {
                    console.log('file create fail');
                }
            }
        });
    }
    createJson() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.checkfile();
            try {
                // var file:string = await fs.readFileSync(this.filePath, 'utf-8');
                // console.log('path:'+this.filePath);
                // console.log(file);
                this.jsonObject = require(this.filePath);
                console.log(this.jsonObject);
                // this.jsonObject = await JSON.parse(file);
                // this.jsonObject = await JSON.parse('{"Account":[{"password":"admin","login":true,"userID":"admin","databaseURL":"http://localhost:8095"}]}');
            }
            catch (error) {
                console.error(error);
                console.log('Fail to read JSON');
            }
        });
    }
}
exports.LocalJsonList = LocalJsonList;
