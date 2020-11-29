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
Object.defineProperty(exports, "__esModule", { value: true });
const ViewHistoryDatabaseWriter_1 = require("../../src/DatabaseConnector/ViewHistoryDatabaseWriter");
//tsc to compilr
//node path to run
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const x = new ViewHistoryDatabaseWriter_1.ViewHistoryDatabaseWriter();
        var t = yield x.writeViewHistory("dd", ["aa", "ss"], "ss", "qq");
        console.log(t);
    });
}
run();
