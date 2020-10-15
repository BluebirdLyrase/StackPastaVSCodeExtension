import { StackExchangeConnecter } from './StackExchangeConnecter';

export class SearchResult extends StackExchangeConnecter {

    public get $haveResult(): boolean {
        return this.haveResult;
    }

    public get $site(): string {
        return this.site;
    }


    /**
     * Getter $lenght
     * @return {number }
     */
	public get $lenght(): number  {
		return this.lenght;
	}


    /**
     * Getter $json
     * @return {any}
     */
	public get $items(): any[] {
		return this.items;
	}

    private haveResult: boolean = false;
    private lenght: number = 0;
    private json: any;
    private items: any[];



	constructor($intitle: string, $page: number, $pageSize: number, $order: string, $sort: string, $site: string, $tagged: string) {
        super();
		this.intitle = $intitle;
		this.page = $page;
		this.pageSize = $pageSize;
		this.order = $order;
		this.sort = $sort;
		this.site = $site;
        this.tagged = $tagged;
        // this.createJson();
    }
    
    private intitle: string;
    private page: number;
    private pageSize: number;
    private order: string;
    private sort: string;
    private site: string;
    private tagged: string;

    public async createJson() {
        let tagContent: string;
        let url: string;
        this.site = this.site;
        if (this.tagged = "") {
            tagContent = "";
        } else {
            tagContent = "&tagged=" + this.tagged;
        }

        url = "https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=" + this.pageSize
            + "&order=" + this.order + "&sort=" + this.sort + "&q=" + this.intitle + "&accepted=True" + tagContent
            + "&site=" + this.site + "&filter=!4(L6lo9D9J9Y3508i";

        let newUrl: string = url.replace(" ", "%20");
        this.json = await this.readJsonFromUrl(newUrl)
       
        this.lenght = Object.keys(this.json.items).length;
        console.log("lenght = " + this.lenght);

        this.items = this.json.items;

    }
}