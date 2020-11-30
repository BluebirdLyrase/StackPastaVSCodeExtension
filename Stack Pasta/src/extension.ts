'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { VSCExpress } from 'vscode-express';
import { Account } from './DatabaseConnector/Account';
import { SearchingHistoryDatabaseWriter } from './DatabaseConnector/SearchingHistoryDatabaseWriter';
import { ViewHistoryDatabaseWriter } from './DatabaseConnector/ViewHistoryDatabaseWriter';
import { StatusBarAlignment, window } from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    const statusBar = window.createStatusBarItem(StatusBarAlignment.Right, 0)
    statusBar.text = `Restart`
    statusBar.command = `workbench.action.reloadWindow`
    statusBar.tooltip = `Restart IDE`
    statusBar.show()

    const statusBar1 = window.createStatusBarItem(StatusBarAlignment.Right, 1)
    statusBar1.text = `Login`
    statusBar1.command = `stackpasta.setting`
    statusBar1.tooltip = `login to stack pasta admin database`
    statusBar1.show()

    const statusBar2 = window.createStatusBarItem(StatusBarAlignment.Right, 2)
    statusBar2.text = `Search`
    statusBar2.command = `stackpasta.search`
    statusBar2.tooltip = `Seach from Stack Exchange`
    statusBar2.show()

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
        const account: Account = new Account();
        let isLoggedIn = account.isLoggedIn()
        isLoggedIn.then(function (data: boolean) {
            // vscode.window.showInformationMessage(data.toString());
            if (data) {
                vscexpress.open('logout.html', 'Logout', vscode.ViewColumn.Two);
            } else {
                vscexpress.open('login.html', 'Login', vscode.ViewColumn.Two);
            }
        });

    }));

    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.logout', () => {
        try {
            const account: Account = new Account();
            const logout = account.Logout();
            logout.then(function (data: string) {
                vscode.window.showInformationMessage(data);
                if(data === "Sucessfully Log-out"){
                    vscexpress.open('login.html', 'Login', vscode.ViewColumn.Two);
                    vscexpress.close('logout.html');
                }
            });
        } catch (error) {
            vscode.window.showInformationMessage("ERROR IN LOGOUT : " + error);
        }
    }));

    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.login', (userID: string, password: string, databaseURL: string) => {
        const account: Account = new Account();
        // vscode.window.showInformationMessage(userID,password,databaseURL);
        const login = account.Login(userID,password,databaseURL);
        login.then(function (data: string) {
            vscode.window.showInformationMessage(data);
            if(data === "Successfully Log-in"){
                vscode.commands.executeCommand('workbench.action.reloadWindow');
                // vscexpress.open('logout.html', 'Login', vscode.ViewColumn.Two);
                // vscexpress.close('login.html');
                
            }
        });

    }));

    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.NotFound', () => {
        vscode.window.showInformationMessage("Con not find any result");
    }));



    //SearchingHistoryDatabaseWriter
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.SHDW', (searchText: string, order: string, sort: string, site: string, tagged: string) => {
        const SHDW: SearchingHistoryDatabaseWriter = new SearchingHistoryDatabaseWriter();
        var result = SHDW.writeSearchingHistory(searchText, order, sort, site, tagged);
        console.log(result);
        result.then(function (data) {
            var result: string = "fail";
            if (data) {
                result = 'success'
            }
            // vscode.window.showInformationMessage(result);
        });
    }));

    //ViewHistoryDatabaseWriter
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.VHDW', (id: string, tags: string[], title: string, site: string) => {
        const VHDW: ViewHistoryDatabaseWriter = new ViewHistoryDatabaseWriter();
        var result = VHDW.writeViewHistory(id, tags, title, site);
        console.log(result);
        result.then(function (data) {
            var result: string = "fail";
            if (data) {
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