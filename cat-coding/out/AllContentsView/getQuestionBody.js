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
exports.GetQuestionBody = void 0;
const AllContent_1 = require("../APIConnector/AllContent");
class GetQuestionBody {
    constructor() {
        this.qHtml = getWebviewContent();
    }
    get $qHtml() {
        return this.qHtml;
    }
}
exports.GetQuestionBody = GetQuestionBody;
function getWebviewContent() {
    return __awaiter(this, void 0, void 0, function* () {
        //   let x = new SearchResult("Eclipse",1,40,"asc", "relevance", "stackoverflow","");
        // await x.createJson();
        // let x = new AllContent("64352962", false, "stackoverflow");1678122
        let x = new AllContent_1.AllContent("1678122", false, "stackoverflow");
        yield x.creatJson();
        var qustion = x.$items;
        return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cat Coding</title>
      </head>
      <body>
    ` + qustion.body + `
      </body>
      </html>`;
    });
}
//# sourceMappingURL=getQuestionBody.js.map