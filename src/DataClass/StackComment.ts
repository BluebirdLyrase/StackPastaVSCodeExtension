class StackComment {

    /**
     * Getter owner
     * @return {string}
     */
	public get owner(): string {
		return this._owner;
  }
  

    /**
     * Getter body
     * @return {string}
     */
	public get body(): string {
		return this._body;
	}


    /**
     * Getter score
     * @return {number}
     */
	public get score(): number {
		return this._score;
	}


    private _body: string;
    private _score: number;
    private _owner: string;

    constructor(body: string,score: number,owner: string) {
      this._body = body;
      this._score = score;
      this._owner = owner;
    }
  }
