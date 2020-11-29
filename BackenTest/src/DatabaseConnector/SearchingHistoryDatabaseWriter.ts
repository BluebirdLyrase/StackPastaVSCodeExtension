import { Account } from './Account';
export class SearchingHistoryDatabaseWriter{

    public async writeSearchingHistory(searchText:string,order:string,sort:string,site:string,tagged:string) : Promise<boolean> {
        const account:Account = new Account();
        var result:boolean
        // const datetime;
        const userID:string = account.getUserID;
        
        return result;
    }
    
}