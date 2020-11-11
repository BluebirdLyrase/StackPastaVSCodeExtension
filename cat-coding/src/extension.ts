import * as vscode from 'vscode';
import { SearchResult } from './APIConnector/SearchResult';
import { AllContent } from './APIConnector/AllContent';
import { GetQuestionBody } from './AllContentsView/getQuestionBody';
import { GetQuestionList } from './AllContentsView/GetQuestionsList';
import {VSCExpress} from 'vscode-express';
export function activate(context: vscode.ExtensionContext) {
  const vscexpress = new VSCExpress(context, 'view');
  context.subscriptions.push(
    vscode.commands.registerCommand('stackpasta.search', () => {
      // Create and show a new webview
    //   const panel = vscode.window.createWebviewPanel(
    //     'catCoding', // Identifies the type of the webview. Used internally
    //     'Cat Coding', // Title of the panel displayed to the user
    //     vscode.ViewColumn.One, // Editor column to show the new webview panel in.
    //     {} // Webview options. More on these later.
    //   );  // And set its HTML content
    //   //This is the way to use Promise value in not async function

    //   let qhtml = new GetQuestionBody;
    //   console.log(qhtml);
    //  // let questionListHtml = new GetQuestionList;

    //  qhtml.$qHtml.then(function (result) {
    //   console.log(result);
    //     panel.webview.html = result;

    //   });

    vscexpress.open('index.html', 'VS Code Express Example',
    vscode.ViewColumn.One);

    })

  );
}

