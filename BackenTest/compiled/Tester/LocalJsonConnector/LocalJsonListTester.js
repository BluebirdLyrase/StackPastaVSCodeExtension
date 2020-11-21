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
const LocalJsonList_1 = require("../../src/LocalJsonConnecter/LocalJsonList");
//tsc to compilr
//node path to run
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let x = yield new LocalJsonList_1.LocalJsonList("Favorite");
        console.log(x.getSize());
        x.delete(0);
        console.log(x.getJsonObject);
        // x.clear();
        // console.log("xx"==="xx");
        // var q = "xx";
        // var w = "xxx"
        // var e = "XX"
        // var r = "qewok"
        // var t = "qexxwok"
        // console.log(q===w)
        // console.log(q===e)
        // console.log(q===r)
        // console.log(q===t)
        // console.log(r===t)
        // console.log(w===t)
        // console.log(q===q&&r===t)
        // console.log(w===t&&q===q)
        // console.log(q===q||q===t)
    });
}
run();
