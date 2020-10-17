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
        this.haveResult = false;
        this.lenght = 0;
        this.items = [];
        this.intitle = $intitle;
        this.page = $page;
        this.pageSize = $pageSize;
        this.order = $order;
        this.sort = $sort;
        this.site = $site;
        this.tagged = $tagged;
        // this.createJson();
    }
    get $haveResult() {
        return this.haveResult;
    }
    get $site() {
        return this.site;
    }
    /**
     * Getter $lenght
     * @return {number }
     */
    get $lenght() {
        return this.lenght;
    }
    /**
     * Getter $json
     * @return {any}
     */
    get $items() {
        return this.items;
    }
    createJson() {
        return __awaiter(this, void 0, void 0, function* () {
            let tagContent;
            let url;
            this.site = this.site;
            if (this.tagged = "") {
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
            this.items = this.json.items;
        });
    }
}
exports.SearchResult = SearchResult;
//# sourceMappingURL=SearchResult.js.map