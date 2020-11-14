"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const vscode_express_1 = require("vscode-express");
function activate(context) {
    const vscexpress = new vscode_express_1.VSCExpress(context, 'view');
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.search', () => {
        // Create and show a new webview
        vscexpress.open('index.html', 'VS Code Express Example', vscode.ViewColumn.One);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.searchList', (searchtext) => {
        // Create and show a new webview
        vscexpress.open('searchResult.html?searchText=' + searchtext, 'VS Code Express Example', vscode.ViewColumn.One);
    }));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map