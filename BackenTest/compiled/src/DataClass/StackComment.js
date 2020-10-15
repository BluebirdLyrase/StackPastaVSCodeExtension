"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackComment = void 0;
class StackComment {
    constructor($body, $score, $owner) {
        this.body = $body;
        this.score = $score;
        this.owner = $owner;
    }
    /**
     * Getter $body
     * @return {string }
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
}
exports.StackComment = StackComment;
