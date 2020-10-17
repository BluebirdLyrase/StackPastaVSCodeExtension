import {StackExchangeConnecter} from './StackExchangeConnecter';

export class AllContent extends StackExchangeConnecter{

        /**
     * Getter $json
     * @return {any}
     */
	public get $json(): any {
		return this.json;
    }

            /**
     * Getter $json
     * @return {any}
     */
	public get $items(): any {
		return this.items;
    }


    /**
     * Getter $haveTags
     * @return {boolean}
     */
	public get $haveTags(): boolean {
		return this.haveTags;
    }
    

    /**
     * Getter $haveComment
     * @return {boolean}
     */
	public get $haveComment(): boolean {
		return this.haveComment;
	}


    /**
     * Getter $haveOwnerImage
     * @return {boolean}
     */
	// public get $haveOwnerImage(): boolean {
	// 	return this.haveOwnerImage;
	// }


    /**
     * Getter $haveAnswer
     * @return {boolean}
     */
	public get $haveAnswer(): boolean {
		return this.haveAnswer;
	}

    /**
     * Getter $question_id
     * @return {string}
     */
	public get $question_id(): string {
		return this.question_id;
	}


    /**
     * Getter $haveAComment
     * @return {boolean[] }
     */
	public get $haveAComment(): boolean[]  {
		return this.haveAComment;
	}

    
    //////Parameter
    private question_id:string;
    private isOffline:boolean;
    private site:string;

    //output
    private json:any;
    private items:any;
    private haveTags: boolean = false;
    private haveComment: boolean = false;
    // private haveOwnerImage:boolean;
    // private haveOwnerImage:boolean;
    private haveAnswer: boolean = false;
    // private haveOwner:boolean;
    private haveAComment:boolean[] = new Array;



	constructor($question_id: string, $isOffline: boolean, $site: string) {
        super();
		this.question_id = $question_id;
		this.isOffline = $isOffline;
		this.site = $site;
    }

    public async creatJson(){
    
        if(this.isOffline){
            //TODO
            console.log("not yet implement")
        }else{
            await this.jsonFromAPI();
        }
    }

    public async jsonFromAPI(){
        let url: string;
        url = "https://api.stackexchange.com/2.2/questions/" + this.question_id
        + "?order=asc&sort=activity&site="+this.site+"&filter="
        + "!6CZol-kjk43Caeu4wbmgfWPFBKTl-6MgX9_mx25H6._QEcG9r2lN3QrdeDe";
        this.json = await this.readJsonFromUrl(url);
        await this.createdata();

    }

    private async createdata(){
        this.items = this.json.items[0];
        // this.haveOwnerImage = (this.items.owner.profile_image != null);
        // this.haveOwner = (this.items.owner.display_name != null); // catch bug no Owner
        this.haveTags = (this.items.tags != null);
        this.haveAnswer = (this.items.answer_count != 0);
        this.haveComment = (this.items.comment_count != 0);
        if(this.haveAnswer){
            var lenght = this.items.answer_count;
            for (let i = 0; i < lenght ; i++) {
                this.haveAComment.push(this.items.answers[i].comment_count!=0);
            }
        }
    }
    

}