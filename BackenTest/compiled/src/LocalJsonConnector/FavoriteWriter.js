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
exports.FavoriteWriter = void 0;
const LocalJsonList_1 = require("./LocalJsonList");
class FavoriteWriter extends LocalJsonList_1.LocalJsonList {
    constructor() {
        super("Favorite");
    }
    saveFavorite(title, id, site) {
        return __awaiter(this, void 0, void 0, function* () {
            var msg = "Failed to added " + title + " to Favorite";
            var obj = this.getJsonObject;
            var fav = obj.Favorite;
            var l = fav.length;
            console.log("Fav Lenght : " + l);
            var isNotDuplicate = true;
            fav.forEach(function (value, index) {
                console.log(index + "::" + value.ID + value.Site);
                if (value.ID === id && value.Site === site) {
                    console.log("isDupe");
                    isNotDuplicate = false;
                    msg = title + " is Duplicate ";
                }
            });
            if (isNotDuplicate) {
                fav.push({ Site: site, Title: title, ID: id });
                this.saveJSONFile(this.filePath, fav);
                msg = "Succesfully added " + title + " to Favorite";
            }
            return msg;
        });
    }
}
exports.FavoriteWriter = FavoriteWriter;
