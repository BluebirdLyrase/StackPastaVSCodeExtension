import { Account } from './Account';
import axios from 'axios';
export class SearchingHistoryDatabaseWriter{

    public async writeSearchingHistory(searchText:string,order:string,sort:string,site:string,tagged:string) : Promise<boolean> {
        var result:boolean = false;
        try{
        const account:Account = new Account();
        const isLoggedIn:boolean = await account.isLoggedIn();

        if(isLoggedIn){
        let dateTime = new Date();
        var offset = dateTime.getTimezoneOffset()/60;
        dateTime.setUTCHours(dateTime.getUTCHours()-offset);
        var userID:string = await account.getUserID();
        // console.log(userID);
        // console.log(dateTime);
        const data:any = JSON.parse('{}');
        data.Order = order;
        data.Site = site;
        data.Tagged = tagged;
        data["Sort By"] = sort ;
        data.UserID = userID ;
        data["Search Text"] = searchText ;
        data.Date = dateTime ;
        // console.log(data);

        var databaseURL = await account.getDatabaseURL();

        const URL:string = databaseURL + "/api/addSearchingHistory"; 
        const response = await axios.post(URL,data);
        // console.log(response);
        console.log("response is = " + response.data);
        result = true;
        }
        
        }catch(error){
            console.log(error)
        }
        return result;
    }
    
}