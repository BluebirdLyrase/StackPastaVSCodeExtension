import * as vscode from 'vscode';
import {VSCExpress} from 'vscode-express';
export function activate(context: vscode.ExtensionContext) {
  const vscexpress = new VSCExpress(context, 'view');
  context.subscriptions.push(
    vscode.commands.registerCommand('stackpasta.search', () => {
      // Create and show a new webview
    vscexpress.open('index.html', 'VS Code Express Example',
    vscode.ViewColumn.One);

    })

  );
}

