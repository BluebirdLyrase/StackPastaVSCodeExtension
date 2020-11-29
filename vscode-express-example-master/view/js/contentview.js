
function ContentView(id, site) {
    console.log(id);
    // command('stackpasta.allContent', id,site);
    // command('extension.vscexpressclose', 'index.html');
    $("#main").addClass("d-none");

    $.get("contentview.html", function(html_string) {
        $("#Content").append(html_string);
        console.log(html_string);
    }, 'html'); // this is the change now its working

    url = "https://api.stackexchange.com/2.2/questions/" + id +
        "?order=asc&sort=activity&site=" + site + "&filter=" +
        "!6CZol-kjk43Caeu4wbmgfWPFBKTl-6MgX9_mx25H6._QEcG9r2lN3QrdeDe";

    $.get(url, function(data, status) {
        console.log(url);
        HTMLBuilder(data,id,site);
    });

}

function HTMLBuilder(data,id,site) {
    q = data.items[0];

    var HTMLBody;
    command('stackpasta.VHDW',id,q.tags,q.title,site);
    question = "<h4 style='margin-top:4px'>" +
        q.title + "</h4>" +
        q.body + "<hr>";

    $("#contentview").append(question);
    // HTMLBody = HTMLBody + question;

    questionComment = ""

    if (q.comment_count > 0) {
        questionComment = "<button class=\"link\" onclick=\"showComment('comment')\">show comments</button><div  id=\"qCommentID\" class='commentbox'>";
        q.comments.forEach(function(item, index) {

            questionComment = questionComment +
                "<div class='comment'><a style='color: #f2af6f' >" +
                item.score + " </a><B>" + item.owner.display_name + " </B>" + item.body + "</div>" +
                "<hr style=' margin-left: 3%;margin-right: 3%;height: .2px;'>";

        });
    }

    $("#contentview").append(questionComment);
    // HTMLBody = HTMLBody + questionComment;

    questionOwner = "<div class='owner myrow' >" +
        "<div class='column'><img src=\"" +
        q.owner.profile_image + "\" class=\"userImg\" title=\"User Image\">" +
        "<h6>" + q.owner.display_name + "</h6></div>" +

        "<div class='column'>Score: <a style='color: #f2af6f'>" +
        q.score + "</a> <br> Tag : " + q.tags + "</div></div>" +
        "<hr style=\" box-shadow: 0px 5px 5px black;\">"

    $("#contentview").append(questionOwner);
    // HTMLBody = HTMLBody + questionOwner;

    if (q.answer_count > 0) {

        q.answers.forEach(function(item, index) {

            answersbody = "";
            if (item.is_accepted) {
                answersbody = "<div class=\"none" + index + "\"><h5 style=\"color:#00C851\" >Answer #" + (index + 1) + "</h5>" +
                    item.body + "<hr>"
            } else {
                answersbody = "<div class=\"none" + index + "\"><h5>Answer #" + (index + 1) + "</h5>" +
                    item.body + "<hr>"
            }
            $("#contentview").append(answersbody);
            // HTMLBody = HTMLBody + answersbody;

            if (item.comment_count > 0) {
                answercomment = "<button class=\"link\" onclick='showComment(" + index + ")' >show comments</button><div  id='aCommentID" + index + "' class='commentbox'>";
                item.comments.forEach(function(comment, index) {

                    answercomment = answercomment +
                        "<div class='comment'><a style='color: #f2af6f' >" +
                        comment.score + " </a><B>" + comment.owner.display_name + " </B>" + comment.body + "</div>" +
                        "<hr style=' margin-left: 3%;margin-right: 3%;height: .2px;'>";

                });
                $("#contentview").append(answercomment);
                // HTMLBody = HTMLBody + answercomment;
            }

            answerOwner = "<div class='owner myrow' >" +
                "<div class='column'><img src=\"" +
                item.owner.profile_image + "\" class=\"userImg\" title=\"User Image\">" +
                "<h6>" + item.owner.display_name + "</h6></div>" +

                "<div class='column'>Score: <a style='color: #f2af6f'>" +
                item.score + "</a> <br></div></div>" +
                "<hr style=\" box-shadow: 0px 5px 5px black;\">"

            $("#contentview").append(answerOwner);
            // HTMLBody = HTMLBody + answerOwner;

        });

    }

    // $("#contentview").append(HTMLBody);

}



function back() {
    $("#Content").empty();
    $("#contentview").empty();
    $("#main").removeClass("d-none");
}

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

