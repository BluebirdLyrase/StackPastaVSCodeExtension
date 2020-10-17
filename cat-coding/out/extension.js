"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const getQuestionBody_1 = require("./AllContentsView/getQuestionBody");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('catCoding.start', () => {
        // Create and show a new webview
        const panel = vscode.window.createWebviewPanel('catCoding', // Identifies the type of the webview. Used internally
        'Cat Coding', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {} // Webview options. More on these later.
        ); // And set its HTML content
        //This is the way to use Promise value in not async function
        let qhtml = new getQuestionBody_1.GetQuestionBody;
        console.log(qhtml);
        // let questionListHtml = new GetQuestionList;
        qhtml.$qHtml.then(function (result) {
            console.log(result);
            panel.webview.html = result;
        });
    }));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map