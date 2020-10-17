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
const SearchResult_1 = require("../../src/APIConnector/SearchResult");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let x = new SearchResult_1.SearchResult("Eclipse", 1, 40, "asc", "relevance", "stackoverflow", "");
        yield x.createJson();
        let z = x.$items;
        for (let i = 0; i < x.$lenght; i++) {
            console.log("title : " + z[i].title);
            console.log("ID : " + z[i].question_id);
        }
    });
}
run();
//# sourceMappingURL=NewSearchResultTest.js.map