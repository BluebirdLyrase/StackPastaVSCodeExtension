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
exports.GetQuestionList = void 0;
const SearchResult_1 = require("../APIConnector/SearchResult");
class GetQuestionList {
    constructor() {
        this.questionListHtml = getWebviewContent();
    }
    get $questionListHtml() {
        return this.questionListHtml;
    }
}
exports.GetQuestionList = GetQuestionList;
function getWebviewContent() {
    return __awaiter(this, void 0, void 0, function* () {
        let x = new SearchResult_1.SearchResult("Eclipse", 1, 40, "asc", "relevance", "stackoverflow", "");
        yield x.createJson();
        let z = x.$items;
        var questionList = new Array;
        var strQlist = "";
        // await x.createJson();
        // let x = new AllContent("64352962", false, "stackoverflow");1678122
        // let x = new AllContent("1678122", false, "stackoverflow");
        //await x.creatJson();
        //var qustion = x.$items;
        for (let i = 0; i < x.$lenght; i++) {
            console.log("title : " + z[i].title);
            console.log("ID : " + z[i].question_id);
            strQlist = questionList[i].concat(z[i].title);
            console.log(strQlist);
        }
        return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cat Coding</title>
      </head>
      <body>
      fsd[pfksadgkfa[g]]fdsgsdgvdsgvdszv
    ` + strQlist + `
      </body>
      </html>`;
    });
}
//# sourceMappingURL=GetQuestionsList.js.map