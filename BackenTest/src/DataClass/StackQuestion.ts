import {StackAnswer} from "./StackAnswer";
import {StackComment} from './StackComment';

export class StackQuestion{


	constructor($id: string, $title: string, $body: string, $comment: StackComment[], $answer: StackAnswer[], $haveComment: boolean, $haveAnswer: boolean, $owner: string, $ownerImage: string, $score: number, $tags: string[], $haveTags: boolean, $site: string) {
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
	public get $id(): string {
		return this.id;
	}

    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Getter $body
     * @return {string}
     */
	public get $body(): string {
		return this.body;
	}

    /**
     * Getter $comment
     * @return {Comment[]}
     */
	public get $comment(): StackComment[] {
		return this.comment;
	}

    /**
     * Getter $answer
     * @return {Answer[]}
     */
	public get $answer(): StackAnswer[] {
		return this.answer;
    }
    

    /**
     * Getter $haveComment
     * @return {boolean}
     */
	public get $haveComment(): boolean {
		return this.haveComment;
	}

    /**
     * Getter $haveAnswer
     * @return {boolean}
     */
	public get $haveAnswer(): boolean {
		return this.haveAnswer;
	}

    /**
     * Getter $owner
     * @return {string}
     */
	public get $owner(): string {
		return this.owner;
	}

    /**
     * Getter $ownerImage
     * @return {string}
     */
	public get $ownerImage(): string {
		return this.ownerImage;
	}

    /**
     * Getter $score
     * @return {number}
     */
	public get $score(): number {
		return this.score;
	}

    /**
     * Getter $tags
     * @return {string[]}
     */
	public get $tags(): string[] {
		return this.tags;
	}

    /**
     * Getter $haveTags
     * @return {boolean}
     */
	public get $haveTags(): boolean {
		return this.haveTags;
	}

    /**
     * Getter $site
     * @return {string}
     */
	public get $site(): string {
		return this.site;
	}

    private id:string;
    private title:string;
    private body:string;
    private comment:StackComment[];
    private answer:StackAnswer[];
    private haveComment:boolean;
    private haveAnswer:boolean;
    private owner:string;
    private ownerImage:string;
    private score:number;
    private tags:string[];
    private haveTags:boolean;
    private site:string;

}