"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackQuestion = void 0;
class StackQuestion {
    constructor($id, $title, $body, $comment, $answer, $haveComment, $haveAnswer, $owner, $ownerImage, $score, $tags, $haveTags, $site) {
        this.id = $id;
        this.title = $title;
        this.body = $body;
        this.comment = $comment;
        this.answer = $answer;
        this.haveComment = $haveComment;
        this.haveAnswer = $haveAnswer;
        this.owner = $owner;
        this.ownerImage = $ownerImage;
        this.score = $score;
        this.tags = $tags;
        this.haveTags = $haveTags;
        this.site = $site;
    }
    /**
     * Getter $id
     * @return {string}
     */
    get $id() {
        return this.id;
    }
    /**
     * Getter $title
     * @return {string}
     */
    get $title() {
        return this.title;
    }
    /**
     * Getter $body
     * @return {string}
     */
    get $body() {
        return this.body;
    }
    /**
     * Getter $comment
     * @return {Comment[]}
     */
    get $comment() {
        return this.comment;
    }
    /**
     * Getter $answer
     * @return {Answer[]}
     */
    get $answer() {
        return this.answer;
    }
    /**
     * Getter $haveComment
     * @return {boolean}
     */
    get $haveComment() {
        return this.haveComment;
    }
    /**
     * Getter $haveAnswer
     * @return {boolean}
     */
    get $haveAnswer() {
        return this.haveAnswer;
    }
    /**
     * Getter $owner
     * @return {string}
     */
    get $owner() {
        return this.owner;
    }
    /**
     * Getter $ownerImage
     * @return {string}
     */
    get $ownerImage() {
        return this.ownerImage;
    }
    /**
     * Getter $score
     * @return {number}
     */
    get $score() {
        return this.score;
    }
    /**
     * Getter $tags
     * @return {string[]}
     */
    get $tags() {
        return this.tags;
    }
    /**
     * Getter $haveTags
     * @return {boolean}
     */
    get $haveTags() {
        return this.haveTags;
    }
    /**
     * Getter $site
     * @return {string}
     */
    get $site() {
        return this.site;
    }
}
exports.StackQuestion = StackQuestion;
