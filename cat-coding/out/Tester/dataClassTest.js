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
const StackQuestion_1 = require("../src/DataClass/StackQuestion");
const StackAnswer_1 = require("../src/DataClass/StackAnswer");
const StackComment_1 = require("../src/DataClass/StackComment");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let AC = new StackComment_1.StackComment("aCommentbodyyy", 20, "ACowner");
        let AC2 = new StackComment_1.StackComment("aCommentbodyyy", 20, "ACowner");
        let AC3 = new StackComment_1.StackComment("aCommentbodyyy", 20, "ACowner");
        let AAC = new Array;
        // AAC = new StackComment[];
        AAC.push(AC);
        AAC.push(AC2);
        AAC.push(AC3);
        let Ans = new StackAnswer_1.StackAnswer("Answer bodyyy", 202, "Aowner", "AownerImage", true, AAC, true);
        let Ans2 = new StackAnswer_1.StackAnswer("Answer 2 bodyyy", 202, "Aowner", "AownerImage", true, AAC, true);
        let AAA = new Array;
        // AAA = new StackAnswer[2]
        AAA.push(Ans);
        AAA.push(Ans2);
        let Q = new StackQuestion_1.StackQuestion("123", "Qtitle", "Qbodayyyy", AAC, AAA, true, true, "Qowner", "QownerImage", 23, null, false, "site");
        console.log(Q);
        console.log("----------------------------");
        console.log(Q.$answer[0].$comment[0].$body);
    });
}
run();
//# sourceMappingURL=dataClassTest.js.map