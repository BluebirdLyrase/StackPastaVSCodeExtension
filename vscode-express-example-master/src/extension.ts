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
    context.subscriptions.push(vscode.commands.registerCommand('stackpasta.allContent', (id: string,site: string) => {
        vscode.window.showInformationMessage('QUESTION ID :: ' +id+site);
        // openContent(id,site,isOffline);
        const panel = vscode.window.createWebviewPanel(
            'question',
            site,
            vscode.ViewColumn.Two,
            {}
          );
    
           getWebviewContent(id,site).then(response => {
            panel.webview.html = response
          })
        ;

    }));

}
    
async function getWebviewContent(id : string,site : string) {

    var content = new AllContent(id,site);
    await content.jsonFromAPI();
    var q = content.$items;

    var question = "<h4 style='margin-top:4px'>" +
    q.title + "</h4>" +
    q.body + "<hr>";
    var HTMLBody = HTMLBody + question;

var questionComment = ""

if (q.comment_count > 0) {
    questionComment = "<button class=\"link\" onclick=\"showComment('comment')\">show comments</button><div  id=\"qCommentID\" class='commentbox'>";
    q.comments.forEach(function(item, index) {

        questionComment = questionComment +
            "<div class='comment'><a style='color: #f2af6f' >" +
            item.score + " </a><B>" + item.owner.display_name + " </B>" + item.body + "</div>" +
            "<hr style=' margin-left: 3%;margin-right: 3%;height: .2px;'>";

    });
}
HTMLBody = HTMLBody + questionComment;


var questionOwner = "<div class='owner myrow' >" +
    "<div class='column'><img src=\"" +
    q.owner.profile_image + "\" class=\"userImg\" title=\"User Image\">" +
    "<h6>" + q.owner.display_name + "</h6></div>" +

    "<div class='column'>Score: <a style='color: #f2af6f'>" +
    q.score + "</a> <br> Tag : " + q.tags + "</div></div>" +
    "<hr style=\" box-shadow: 0px 5px 5px black;\">"

    HTMLBody = HTMLBody + questionOwner;

if (q.answer_count > 0) {

    q.answers.forEach(function(item, index) {

        var answersbody = "";
        if (item.is_accepted) {
            answersbody = "<div class=\"none" + index + "\"><h5 style=\"color:#00C851\" >Answer #" + (index + 1) + "</h5>" +
                item.body + "<hr>"
        } else {
            answersbody = "<div class=\"none" + index + "\"><h5>Answer #" + (index + 1) + "</h5>" +
                item.body + "<hr>"
        }

        HTMLBody = HTMLBody + answersbody;

        if (item.comment_count > 0) {
            var answercomment = "<button class=\"link\" onclick='showComment(" + index + ")' >show comments</button><div  id='aCommentID" + index + "' class='commentbox'>";
            item.comments.forEach(function(comment, index) {

                answercomment = answercomment +
                    "<div class='comment'><a style='color: #f2af6f' >" +
                    comment.score + " </a><B>" + comment.owner.display_name + " </B>" + comment.body + "</div>" +
                    "<hr style=' margin-left: 3%;margin-right: 3%;height: .2px;'>";

            });
            HTMLBody = HTMLBody + answercomment;
        }

        var answerOwner = "<div class='owner myrow' >" +
            "<div class='column'><img src=\"" +
            item.owner.profile_image + "\" class=\"userImg\" title=\"User Image\">" +
            "<h6>" + item.owner.display_name + "</h6></div>" +

            "<div class='column'>Score: <a style='color: #f2af6f'>" +
            item.score + "</a> <br> Tag : " + item.tags + "</div></div>" +
            "<hr style=\" box-shadow: 0px 5px 5px black;\">"

        HTMLBody = HTMLBody + answerOwner;

    });

}

    return `
    <style type = "text/css">
    .userImg {
        /* box-shadow: 0px 2px 2px black; */
        width: 50px;
        height: 50px;
    }
    
    * {
        box-sizing: border-box;
    }
    
    .column {
        float: left;
        width: 50%;
    }
    
    .owner {
        background-color: rgb(34, 31, 31);
    }
    
    .myrow:after {
        content: "";
        display: table;
        clear: both;
    }
    
    button.link {
        background: none;
        border: none;
        color: rgb(118, 118, 216);
        font-weight: bold;
        margin-bottom: 15px;
    }
    
    .accepted {
        border-style: solid;
        border-color: #00C851;
    }
    
    .comment {
        margin-right: 5%;
        margin-left: 5%;
        font-size: 14px;
    }
    
    .commentbox {
        background-color: #3d4042;
        display: none;
    }
    
    .content {
        /* margin-left: .5%;
        margin-right: .5%; */
        background-color: rgb(39, 39, 39);
    }
    
    .contentview {
        margin-left: .5%;
        margin-right: .5%;
        font-size: 15px;
        color: rgb(255, 255, 255);
    }
    
    pre {
        color: rgb(206, 167, 91);
        background-color: #333333;
        margin-left: 1%;
        margin-right: 1%
    }
    
    hr {
        background-color: rgb(148, 151, 153);
        height: .5px;
    }
    
    .contentnav {
        background-color: #333;
        overflow: hidden;
    }
    
    .contentnav a {
        color: #f2f2f2;
        padding: 5px 8px;
        float: left;
        text-align: center;
        text-decoration: none;
        font-size: 15px;
    }
    
    .contentnav a:hover {
        background-color: #ddd;
        color: black;
    }
    
    .score {
        color: #f2af6f
    }
    </style>
    <div id='contentview' class="contentview">`+HTMLBody+`</div>
    <script>
    function showComment(id) {
        console.log(id)
        if (id != 'comment') {
            var x = document.getElementById("aCommentID" + id);
        } else {
            var x = document.getElementById("qCommentID");
        }
    
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    </script>
    
    `;
  }



// this method is called when your extension is deactivated
export function deactivate() {
    
}