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
exports.SearchResult = void 0;
const StackExchangeConnecter_1 = require("./StackExchangeConnecter");
class SearchResult extends StackExchangeConnecter_1.StackExchangeConnecter {
    constructor($intitle, $page, $pageSize, $order, $sort, $site, $tagged) {
        super();
        this.titleList = new Array;
        this.questionIdList = new Array;
        this.item = new Array;
        this.intitle = $intitle;
        this.page = $page;
        this.pageSize = $pageSize;
        this.order = $order;
        this.sort = $sort;
        this.site = $site;
        this.tagged = $tagged;
        // this.createJson();
    }
    get getTitleList() {
        return this.titleList;
    }
    get getQuestionIdList() {
        return this.questionIdList;
    }
    get IshaveResult() {
        return this.haveResult;
    }
    get getSite() {
        return this.site;
    }
    createJson() {
        return __awaiter(this, void 0, void 0, function* () {
            let tagContent;
            let url;
            this.site = this.site;
            if (this.tagged = null) {
                tagContent = "";
            }
            else {
                tagContent = "&tagged=" + this.tagged;
            }
            url = "https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=" + this.pageSize
                + "&order=" + this.order + "&sort=" + this.sort + "&q=" + this.intitle + "&accepted=True" + tagContent
                + "&site=" + this.site + "&filter=!4(L6lo9D9J9Y3508i";
            let newUrl = url.replace(" ", "%20");
            this.json = yield this.readJsonFromUrl(newUrl);
            this.lenght = Object.keys(this.json.items).length;
            console.log("lenght = " + this.lenght);
            for (let i = 0; i < this.lenght; i++) {
                this.titleList.push(this.json.items[i].title);
                this.questionIdList.push(this.json.items[i].question_id);
            }
            console.log(this.json.items);
            if (this.lenght == 0) {
                this.haveResult = false;
            }
            else {
                this.haveResult = true;
            }
        });
    }
}
exports.SearchResult = SearchResult;
