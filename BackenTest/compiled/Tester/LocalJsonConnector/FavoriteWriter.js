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
const FavoriteWriter_1 = require("../../src/LocalJsonConnecter/FavoriteWriter");
//tsc to compilr
//node path to run
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let x = yield new FavoriteWriter_1.FavoriteWriter();
        // x.saveFavorite("1","1","1");
        var fav = x.getJsonObject;
        console.log(fav);
        console.log(fav.Favorite.length);
        x.delete(fav.Favorite.length);
        console.log(fav);
    });
}
run();
