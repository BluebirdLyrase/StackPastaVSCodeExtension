import * as vscode from 'vscode';
import { SearchResult } from '../APIConnector/SearchResult';

export class GetQuestionList {

    public get $questionListHtml(): Promise<string> {
        return this.questionListHtml;
    }
    questionListHtml = getWebviewContent();
}
async function getWebviewContent() {
      let x = new SearchResult("Eclipse",1,40,"asc", "relevance", "stackoverflow","");
    // await x.createJson();
    // let x = new AllContent("64352962", false, "stackoverflow");1678122
   // let x = new AllContent("1678122", false, "stackoverflow");
    //await x.creatJson();
    //var qustion = x.$items;
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cat Coding</title>
      </head>
      <body>
    `+ x+ `
      </body>
      </html>`;
}