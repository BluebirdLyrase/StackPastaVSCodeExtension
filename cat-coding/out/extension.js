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
exports.activate = void 0;
const vscode = require("vscode");
const AllContent_1 = require("./APIConnector/AllContent");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('catCoding.start', () => {
        // Create and show a new webview
        const panel = vscode.window.createWebviewPanel('catCoding', // Identifies the type of the webview. Used internally
        'Cat Coding', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {} // Webview options. More on these later.
        ); // And set its HTML content
        //This is the way to use Promise value in not async function
        getWebviewContent().then(function (result) {
            panel.webview.html = result;
        });
    }));
}
exports.activate = activate;
function getWebviewContent() {
    return __awaiter(this, void 0, void 0, function* () {
        //   let x = new SearchResult("Eclipse",1,40,"asc", "relevance", "stackoverflow","");
        // await x.createJson();
        // let x = new AllContent("64352962", false, "stackoverflow");1678122
        let x = new AllContent_1.AllContent("1678122", false, "stackoverflow");
        yield x.creatJson();
        var qustion = x.$items;
        return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cat Coding</title>
  </head>
  <body>
` + qustion.body + `
  </body>
  </html>`;
    });
}
// <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
// พ่อมองขึ้นมาจะเสียใจแค่ไหน 
//# sourceMappingURL=extension.js.map