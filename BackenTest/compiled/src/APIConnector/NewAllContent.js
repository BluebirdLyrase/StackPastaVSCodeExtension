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
exports.AllContent = void 0;
const StackExchangeConnecter_1 = require("./StackExchangeConnecter");
class AllContent extends StackExchangeConnecter_1.StackExchangeConnecter {
    constructor($question_id, $isOffline, $site) {
        super();
        this.question_id = $question_id;
        this.isOffline = $isOffline;
        this.site = $site;
    }
    /**
 * Getter $json
 * @return {any}
 */
    get $json() {
        return this.json;
    }
    /**
* Getter $json
* @return {any}
*/
    get $items() {
        return this.items;
    }
    /**
     * Getter $haveTags
     * @return {boolean}
     */
    get $haveTags() {
        return this.haveTags;
    }
    /**
     * Getter $haveComment
     * @return {boolean}
     */
    get $haveComment() {
        return this.haveComment;
    }
    /**
     * Getter $haveOwnerImage
     * @return {boolean}
     */
    get $haveOwnerImage() {
        return this.haveOwnerImage;
    }
    /**
     * Getter $haveAnswer
     * @return {boolean}
     */
    get $haveAnswer() {
        return this.haveAnswer;
    }
    /**
     * Getter $question_id
     * @return {string}
     */
    get $question_id() {
        return this.question_id;
    }
    creatJson() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isOffline) {
                //TODO
                console.log("not yet implement");
            }
            else {
                yield this.jsonFromAPI();
            }
        });
    }
    jsonFromAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            let url;
            url = "https://api.stackexchange.com/2.2/questions/" + this.question_id
                + "?order=asc&sort=activity&site=" + this.site + "&filter="
                + "!6CZol-kjk43Caeu4wbmgfWPFBKTl-6MgX9_mx25H6._QEcG9r2lN3QrdeDe";
            this.json = yield this.readJsonFromUrl(url);
            yield this.createdata();
        });
    }
    createdata() {
        return __awaiter(this, void 0, void 0, function* () {
            this.items = this.json.items[0];
            this.haveOwnerImage = (this.items.owner.profile_image != null);
            this.haveOwner = (this.items.owner.display_name != null); // catch bug no Owner
            this.haveTags = (this.items.tags != null);
            this.haveAnswer = (this.items.answer_count != 0);
            this.haveComment = (this.items.comment_count != 0);
        });
    }
}
exports.AllContent = AllContent;
