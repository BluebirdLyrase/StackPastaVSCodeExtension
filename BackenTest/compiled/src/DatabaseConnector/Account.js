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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const LocalJsonList_1 = require("../LocalJsonConnector/LocalJsonList");
const axios_1 = __importDefault(require("axios"));
class Account extends LocalJsonList_1.LocalJsonList {
    constructor() {
        super("Account");
        this.success = "Successfully logged in";
        this.wrong = "Incorrect username or password";
        this.error = "Server unavailable";
    }
    Logout() {
        return __awaiter(this, void 0, void 0, function* () {
            var result;
            if (this.haveAccount()) {
                var newfile = this.jsonObject;
                newfile.Account[0].login = false;
                console.log('logout');
                this.saveJSONFile(this.filePath, newfile);
                console.log(this.filePath + "::" + newfile.Account[0].login);
                result = "Logout Succeddfully";
            }
            else {
                result = "You have to Login inorder to Logout";
            }
            return result;
        });
    }
    haveAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createJson();
            // console.log(typeof this.jsonObject.Account[0]==='undefined');
            const l = typeof this.jsonObject.Account[0] === 'undefined';
            console.log("l is " + l);
            return !l;
        });
    }
    Login(userID, password, DatabaseURL) {
        const _super = Object.create(null, {
            checkfile: { get: () => super.checkfile }
        });
        return __awaiter(this, void 0, void 0, function* () {
            var result = this.error;
            this.DatabaseURL = DatabaseURL;
            const json = JSON.parse('{"UserID":"' + userID + '","Password" :"' + password + '"}');
            const authenURL = this.DatabaseURL + "/api/authen";
            try {
                console.log(authenURL);
                const response = yield axios_1.default.post(authenURL, json);
                // console.log(response);
                console.log("response is = " + response.data);
                if (response.data) {
                    yield _super.checkfile.call(this);
                    result = this.success;
                    this.userID = userID;
                    this.password = password;
                    this.setDatabase();
                }
                else {
                    result = this.wrong;
                }
            }
            catch (error) {
                console.error(error);
                result = this.error;
            }
            return result;
        });
    }
    setDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            // const account:any = JSON.parse('{}');
            const account = JSON.parse('{"Account":[{"password":"' + this.password + '","login":true,"userID":"' + this.userID + '","databaseURL":"' + this.DatabaseURL + '"}]}');
            // account.Account[0].passwrod = this.password;
            // account.Account[0].login = true;
            // account.Account[0].userID = this.userID;
            // account.Account[0].databaseURL = this.DatabaseURL;
            this.saveJSONFile(this.filePath, account);
        });
    }
    isLoggedIn() {
        const _super = Object.create(null, {
            checkfile: { get: () => super.checkfile }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createJson();
            var result = false;
            const haveAccount = yield this.haveAccount();
            console.log('haveAccount' + haveAccount);
            if (haveAccount) {
                try {
                    this.userID = this.jsonObject.Account[0].userID;
                    this.password = this.jsonObject.Account[0].password;
                    this.DatabaseURL = this.jsonObject.Account[0].databaseURL;
                    // console.log(userID+password+databaseURL);
                    const json = JSON.parse('{"UserID":"' + this.userID + '","Password" :"' + this.password + '"}');
                    const authenURL = this.DatabaseURL + "/api/authen";
                    const response = yield axios_1.default.post(authenURL, json);
                    if (response.data) {
                        yield _super.checkfile.call(this);
                        result = true;
                    }
                }
                catch (error) {
                    console.log(error);
                    console.log("Error logging in from isLoggedIn");
                    this.Logout();
                }
            }
            return result;
        });
    }
    getUserID() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createJson();
            return this.jsonObject.Account[0].userID;
        });
    }
    getDatabaseURL() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createJson();
            return this.jsonObject.Account[0].databaseURL;
        });
    }
}
exports.Account = Account;
