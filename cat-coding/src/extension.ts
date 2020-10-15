import * as vscode from 'vscode';
import {SearchResult} from './APIConnector/SearchResult';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      // Create and show a new webview
      const panel = vscode.window.createWebviewPanel(
        'catCoding', // Identifies the type of the webview. Used internally
        'Cat Coding', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {} // Webview options. More on these later.
    );  // And set its HTML content
    
    //This is the way to use Promise value in not async function
    getWebviewContent().then(function (result){
      panel.webview.html =  result;
    });
    })
  );
}

async function getWebviewContent() {
  let x = new SearchResult("Eclipse",1,40,"asc", "relevance", "stackoverflow","");
await x.createJson();
let z = x.getTitleList;
console.log(z);
console.log(z[3]);
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cat Coding</title>
  </head>
  <body>
	  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
	  พ่อมองขึ้นมาจะเสียใจแค่ไหน `+z+`
  </body>
  </html>`;
  }