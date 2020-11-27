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
exports.Account = void 0;
const LocalJsonList_1 = require("../LocalJsonConnector/LocalJsonList");
class Account extends LocalJsonList_1.LocalJsonList {
    constructor() {
        super("Account");
        this.success = "Successfully logged in";
        this.wrong = "Incorrect username or password";
        this.error = "Server unavailable";
    }
    Logout() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.haveAccount()) {
                var newfile = this.jsonObject;
                newfile.Account[0].login = false;
                console.log('logout');
                this.saveJSONFile(this.filePath, newfile);
                console.log(this.filePath + "::" + newfile.Account[0].login);
                return "What is this?";
            }
        });
    }
    haveAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            var l = this.jsonObject.Account.lenght;
            return (l != 0);
        });
    }
}
exports.Account = Account;
