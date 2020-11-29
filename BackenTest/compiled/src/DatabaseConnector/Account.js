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
            var l = this.jsonObject.Account.lenght;
            return (l != 0);
        });
    }
    Login(userID, password, DatabaseURL) {
        const _super = Object.create(null, {
            checkfile: { get: () => super.checkfile }
        });
        return __awaiter(this, void 0, void 0, function* () {
            var result;
            this.DatabaseURL = DatabaseURL;
            var json = JSON.parse('{"UserID":"' + userID + '","Password" :"' + password + '"}');
            var authenURL = this.DatabaseURL + "api/authen";
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
            var account;
            account = JSON.parse('{"Account":[{"password":"' + this.password + '","login":true,"userID":"' + this.userID + '","databaseURL":"' + this.DatabaseURL + '"}]}');
            this.saveJSONFile(this.filePath, account);
        });
    }
}
exports.Account = Account;
