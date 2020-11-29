'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { VSCExpress } from 'vscode-express';
import { Account } from './DatabaseConnector/Account';
import { SearchingHistoryDatabaseWriter } from './DatabaseConnector/SearchingHistoryDatabaseWriter';
import { ViewHistoryDatabaseWriter } from './DatabaseConnector/ViewHistoryDatabaseWriter';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "hello" is now active!');

    const vscexpress = new VSCExpress(context, 'view');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json

    //Search Page
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.search', () => {
        vscexpress.open('index.html', 'StackPasta', vscode.ViewColumn.Two);
    }));

    //Setting page
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.setting', () => {
        vscexpress.open('setting.html', 'Setting', vscode.ViewColumn.Two);
    }));

    //SearchingHistoryDatabaseWriter
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.SHDW', (searchText:string,order:string,sort:string,site:string,tagged:string) => {
    const SHDW:SearchingHistoryDatabaseWriter = new SearchingHistoryDatabaseWriter();
    var result = SHDW.writeSearchingHistory(searchText,order,sort,site,tagged);
    console.log(result);
    result.then(function(data){
        var result:string = "fail";
        if(data){
            result = 'success'
        }
    // vscode.window.showInformationMessage(result);
    });
    }));

        //ViewHistoryDatabaseWriter
        context.subscriptions.push(vscode.commands.registerCommand('stackpasta.VHDW', (id:string,tags:string[],title:string,site:string) => {
            const VHDW:ViewHistoryDatabaseWriter = new ViewHistoryDatabaseWriter();
            var result = VHDW.writeViewHistory(id,tags,title,site);
            console.log(result);
            result.then(function(data){
                var result:string = "fail";
                if(data){
                    result = 'success'
                }
            // vscode.window.showInformationMessage(result);
            });
            }));

    //Use for close the tap
    context.subscriptions.push(vscode.commands.registerCommand('extension.vscexpressclose', (path: string) => {
        vscexpress.close(path);
    }));
}


// this method is called when your extension is deactivated
export function deactivate() {

}