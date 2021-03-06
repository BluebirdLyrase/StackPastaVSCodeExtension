"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const AllContent_1 = require("../../src/APIConnector/AllContent");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let x = new AllContent_1.AllContent("64352962", false, "stackoverflow");
        yield x.creatJson();
        var qustion = x.$items;
        // console.log(x.$allContent);
        console.log("qTitle : " + qustion.title +
            "qBody : " + qustion.body +
            "qID : " + x.$question_id ////IMPORTENT !!! YOU MUST USE TIHS TO GET question_ID ro prevent stackExchnage bug
        );
        console.log("qOwnerName : " + qustion.owner.display_name);
        if (x.$haveTags) {
            console.log('tags : ' + qustion.tags);
        }
        else {
            console.log("no tags");
        }
        ////Qustion Owner
        // if (x.$haveOwnerImage) { maybe not nessesary
        console.log("qOwnerImg : " + qustion.owner.profile_image);
        // } else {
        //     console.log("qOwnerImg : no image");
        // }
        // if (x.$haveOwnerImage) {
        console.log("qOwnerImg : " + qustion.owner.profile_image);
        // } else {
        //     console.log("qOwnerImg : no image");
        // }
        ////Question Comment
        if (x.$haveComment) {
            var lenght = qustion.comment_count;
            for (let i = 0; i < lenght; i++) {
                console.log("QC[" + i + "]score : " + qustion.comments[i].score);
                console.log("QC[" + i + "]body : " + qustion.comments[i].body);
                console.log("QC[" + i + "]profile_image : " + qustion.comments[i].owner.profile_image);
                console.log("QC[" + i + "]display_name : " + qustion.comments[i].owner.display_name);
            }
        }
        ////Question Answer
        if (x.$haveAnswer) {
            var lenght = qustion.answer_count;
            for (let i = 0; i < lenght; i++) {
                var answer = qustion.answers[i];
                console.log("QC[" + i + "]body : " + answer.body);
                console.log("QC[" + i + "]answer_id : " + answer.answer_id);
                console.log("QC[" + i + "]score : " + answer.score);
                console.log("QC[" + i + "]is_accepted : " + answer.is_accepted);
                console.log("QC[" + i + "]profile_image : " + answer.owner.profile_image);
                console.log("QC[" + i + "]display_name : " + answer.owner.display_name);
                var AClenght = answer.comment_count;
                if (x.$haveAComment[i]) {
                    for (let j = 0; j < AClenght; j++) {
                        var comment = answer.comments[j];
                        console.log("A[" + i + "]C[" + j + "]display_name : " + comment.owner.display_name);
                        console.log("A[" + i + "]C[" + j + "]score : " + comment.score);
                        console.log("A[" + i + "]C[" + j + "]body : " + comment.body);
                    }
                }
            }
        }
    });
}
run();
