
import {StackComment} from './StackComment';

export class StackAnswer{


	constructor($body: string, $score: number, $owner: string, $ownerImage: string, $is_accepted: boolean, $comment: StackComment[], $haveComment: boolean) {
		this.body = $body;
		this.score = $score;
		this.owner = $owner;
		this.ownerImage = $ownerImage;
		this.is_accepted = $is_accepted;
		this.comment = $comment;
		this.haveComment = $haveComment;
	}
    private body:string;
    private score:number;
    private owner:string;
    private ownerImage:string;
    private is_accepted:boolean;
    private comment: StackComment[];
    private haveComment:boolean;


    /**
     * Getter $body
     * @return {string}
     */
	public get $body(): string {
		return this.body;
	}

    /**
     * Getter $score
     * @return {number}
     */
	public get $score(): number {
		return this.score;
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
     * Getter $is_accepted
     * @return {boolean}
     */
	public get $is_accepted(): boolean {
		return this.is_accepted;
	}

    /**
     * Getter $comment
     * @return {Comment[]}
     */
	public get $comment(): StackComment[] {
		return this.comment;
	}

    /**
     * Getter $haveComment
     * @return {boolean}
     */
	public get $haveComment(): boolean {
		return this.haveComment;
	}


}