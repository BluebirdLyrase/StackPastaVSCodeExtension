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
exports.ViewHistoryDatabaseWriter = void 0;
const Account_1 = require("./Account");
const axios_1 = __importDefault(require("axios"));
class ViewHistoryDatabaseWriter {
    writeViewHistory(id, tags, title, site) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = false;
            try {
                const account = new Account_1.Account();
                const isLoggedIn = yield account.isLoggedIn();
                if (isLoggedIn) {
                    let dateTime = new Date();
                    var offset = dateTime.getTimezoneOffset() / 60;
                    dateTime.setUTCHours(dateTime.getUTCHours() - offset);
                    var userID = yield account.getUserID();
                    // console.log(userID);
                    // console.log(dateTime);
                    const data = JSON.parse('{}');
                    data.ID = id;
                    data.Site = site;
                    data.Title = title;
                    data.UserID = userID;
                    data.Date = dateTime;
                    data.Tags = tags;
                    // console.log(data);
                    var databaseURL = yield account.getDatabaseURL();
                    const URL = databaseURL + "/api/addViewHistory";
                    const response = yield axios_1.default.post(URL, data);
                    // console.log(response);
                    console.log("response is = " + response.data);
                    result = true;
                }
            }
            catch (error) {
                console.log(error);
            }
            return result;
        });
    }
}
exports.ViewHistoryDatabaseWriter = ViewHistoryDatabaseWriter;
