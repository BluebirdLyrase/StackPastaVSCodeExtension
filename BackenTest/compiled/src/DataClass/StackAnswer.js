"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackAnswer = void 0;
class StackAnswer {
    constructor($body, $score, $owner, $ownerImage, $is_accepted, $comment, $haveComment) {
        this.body = $body;
        this.score = $score;
        this.owner = $owner;
        this.ownerImage = $ownerImage;
        this.is_accepted = $is_accepted;
        this.comment = $comment;
        this.haveComment = $haveComment;
    }
    /**
     * Getter $body
     * @return {string}
     */
    get $body() {
        return this.body;
    }
    /**
     * Getter $score
     * @return {number}
     */
    get $score() {
        return this.score;
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
     * Getter $is_accepted
     * @return {boolean}
     */
    get $is_accepted() {
        return this.is_accepted;
    }
    /**
     * Getter $comment
     * @return {Comment[]}
     */
    get $comment() {
        return this.comment;
    }
    /**
     * Getter $haveComment
     * @return {boolean}
     */
    get $haveComment() {
        return this.haveComment;
    }
}
exports.StackAnswer = StackAnswer;
