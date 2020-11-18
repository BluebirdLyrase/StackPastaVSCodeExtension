'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {AllContent} from './APIConnector/AllContent';
import {VSCExpress} from 'vscode-express';

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

    //Favorite Page
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.favorite', () => {
        vscexpress.open('favorite.html', 'Favorite Question', vscode.ViewColumn.Two);
    }));

    //History Page
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.history', () => {
        vscexpress.open('history.html', 'History', vscode.ViewColumn.Two);
    }));

    //Offline Page
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.offline', () => {
        vscexpress.open('offline.html', 'Offline Storage', vscode.ViewColumn.Two);
    }));

    //Pinned Question page
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.pinned', () => {
        vscexpress.open('pinned.html', 'Pinned Question', vscode.ViewColumn.Two);
    }));

    //Setting page
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.setting', () => {
        vscexpress.open('setting.html', 'Setting', vscode.ViewColumn.Two);
    }));

    //Use for close the tap
    context.subscriptions.push(vscode.commands.registerCommand('extension.vscexpressclose', (path: string) => {
        vscexpress.close(path);
    }));

    //All Content
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.allContent', (id: string,site: string,isOffline:boolean) => {
        vscode.window.showInformationMessage('QUESTION ID :: ' +id+site+isOffline);
        // openContent(id,site,isOffline);
        const panel = vscode.window.createWebviewPanel(
            'question',
            site,
            vscode.ViewColumn.Two,
            {}
          );
    
           getWebviewContent(id,site,isOffline).then(response => {
            panel.webview.html = response
          })
        ;

    }));

}
    
async function getWebviewContent(id : string,site : string,isOffline : boolean) {

    let x = new AllContent(id, isOffline, site);
    await x.creatJson();
    var q = x.$items;
    var HTMLbody; 
    var answer = "";
    var question = "";
    var questionComment = "";
    var answerComment = "";
    var questionOwner = "";
    var answerOwner = "";
    var tag = "";
    
    question = "<h2>Question : " + 
    q.title + "</h2>" + "<div style=\" font-size: 13px \"> " + 
    q.body + "</div><hr>"



    HTMLbody = question;
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cat Coding</title>
    <style>
        // code {background-color: #eff0f1;}
        .userImg {box-shadow: 0px 2px 2px black;
                  width: 50px; height: 50px; }
        * {box-sizing: border-box;}
        .column { float: left; width: 50%; }
        .row:after {content: "";
                    display: table;
                    clear: both; }
        button.link { background:none;border:none;color:blue; }
        .accepted{border-style:solid;border-color:#00C851;}
    </style>
  </head>
  <body>
 `+HTMLbody+`
 <button onclick="command('stackpasta.favorite')">HEREE</button>
 <script> 
 function showComment(id) { 
  if(id!='comment'){ 
        var x = document.getElementById("aCommentID"+id); 
    } else { 
    var x = document.getElementById("qCommentID"); 
    }

if (x.style.display === "block") {
    x.style.display = "none";
     else {
    x.style.display = "block"; }
    }

    </script>


  </body>
  </html>`;
  }



// this method is called when your extension is deactivated
export function deactivate() {
    
}