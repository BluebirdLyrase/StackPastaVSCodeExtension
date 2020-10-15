// import { StackExchangeConnecter } from './src/APIConnector/StackExchangeConnecter';

// export class SearchResult extends StackExchangeConnecter {

//     public get $titleList(): string[] {
//         return this.titleList;
//     }

//     public get $questionIdList(): string[] {
//         return this.questionIdList;
//     }

//     public get $haveResult(): boolean {
//         return this.haveResult;
//     }

//     public get $site(): string {
//         return this.site;
//     }


//     private titleList: string[] = new Array;
//     private questionIdList: string[] = new Array;
//     private item: string[] = new Array;
//     private haveResult: boolean = false;
//     private lenght: number = 0;
//     private json: any;



// 	constructor($intitle: string, $page: number, $pageSize: number, $order: string, $sort: string, $site: string, $tagged: string) {
//         super();
// 		this.intitle = $intitle;
// 		this.page = $page;
// 		this.pageSize = $pageSize;
// 		this.order = $order;
// 		this.sort = $sort;
// 		this.site = $site;
//         this.tagged = $tagged;
//         // this.createJson();
//     }
    
//     private intitle: string;
//     private page: number;
//     private pageSize: number;
//     private order: string;
//     private sort: string;
//     private site: string;
//     private tagged: string;

//     public async createJson() {
//         let tagContent: string;
//         let url: string;
//         this.site = this.site;
//         if (this.tagged = "") {
//             tagContent = "";
//         } else {
//             tagContent = "&tagged=" + this.tagged;
//         }

//         url = "https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=" + this.pageSize
//             + "&order=" + this.order + "&sort=" + this.sort + "&q=" + this.intitle + "&accepted=True" + tagContent
//             + "&site=" + this.site + "&filter=!4(L6lo9D9J9Y3508i";

//         let newUrl: string = url.replace(" ", "%20");
//         this.json = await this.readJsonFromUrl(newUrl)
       
//         this.lenght = Object.keys(this.json.items).length;
//         console.log("lenght = " + this.lenght);
        
//         for (let i = 0; i < this.lenght ; i++) {
//              this.titleList.push(this.json.items[i].title)
//              this.questionIdList.push(this.json.items[i].question_id)
//           }
//           console.log(this.json.items);
//         if(this.lenght == 0){
//             this.haveResult = false;
//         }else{
//             this.haveResult = true;
//         }
//     }
// }