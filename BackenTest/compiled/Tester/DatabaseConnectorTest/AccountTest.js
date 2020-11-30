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
const Account_1 = require("../../src/DatabaseConnector/Account");
//tsc to compilr
//node path to run
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const x = new Account_1.Account();
        // let x = new Account();
        // var q = await x.Logout()
        // console.log("what "+q)
        // var w = await x.Login("admin","admin","http://localhost:8095");
        // console.log(w);
        // var c = await x.getDatabaseURL();
        // console.log(c);
        // var e = await x.Login("admwefwefin","admiq13124n","http://localhost:8095/");
        // console.log(e);
        // var r = await x.Login("admin","admin","http://localhowst:8095/qwqe1/wfq4gqgq34");
        // console.log(r);
        var t = yield x.isLoggedIn();
        // var z = await x.getUserID();
        console.log("isLogin? : " + t);
        // x.Logout();
    });
}
run();
