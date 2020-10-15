// import {StackQuestion} from '../DataClass/StackQuestion';
// import {StackAnswer} from '../DataClass/StackAnswer';
// import {StackComment} from '../DataClass/StackComment';
// import {StackExchangeConnecter} from './StackExchangeConnecter';

// export class AllContent extends StackExchangeConnecter{

//         /**
//      * Getter $json
//      * @return {any}
//      */
// 	public get $json(): any {
// 		return this.json;
//     }

//             /**
//      * Getter $json
//      * @return {any}
//      */
// 	public get $allContent(): StackQuestion {
// 		return this.allContent;
//     }
    
//     //////Parameter
//     private question_id:string;
//     private isOffline:boolean;
//     private site:string;
//     private json:any;

//     //////Variable
//     private allContent:StackQuestion
//     private title:string;
//     private id:string;
//     private body:string;
//     private qOwner:string;
//     private qOwnerImage:string;
//     private qScore:string;
//     private haveTags:boolean;
//     private tags:String[];
//     private qComment:StackComment;
//     private haveComment:boolean;
//     private haveAnswer:boolean;

//     private Answer:StackAnswer[];

// 	constructor($question_id: string, $isOffline: boolean, $site: string) {
//         super();
// 		this.question_id = $question_id;
// 		this.isOffline = $isOffline;
// 		this.site = $site;
//     }

//     public async creatJson(){
    
//         if(this.isOffline){
//             //TODO
//             console.log("not yet implement")
//         }else{
//             await this.jsonFromAPI();
//         }
//     }

//     public async jsonFromAPI(){
//         let url: string;
//         url = "https://api.stackexchange.com/2.2/questions/" + this.question_id
//         + "?order=asc&sort=activity&site="+this.site+"&filter="
//         + "!6CZol-kjk43Caeu4wbmgfWPFBKTl-6MgX9_mx25H6._QEcG9r2lN3QrdeDe";
//         this.json = await this.readJsonFromUrl(url)
//         await this.creatQuestion();
//     }
    
//     public async creatQuestion(){
//         var items = this.json.items[0];
//         this.title = items.title;
//         // this.question_id = this.question_id
//         this.body = items.body;
//         this.qScore = items.score;


//     }

// }