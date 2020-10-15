export class StackComment{

    private body:string ;
    private score:number;
    private owner:string;


	constructor($body: string , $score: number, $owner: string) {
		this.body = $body;
		this.score = $score;
		this.owner = $owner;
    }
    

    /**
     * Getter $body
     * @return {string }
     */
	public get $body(): string  {
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




}