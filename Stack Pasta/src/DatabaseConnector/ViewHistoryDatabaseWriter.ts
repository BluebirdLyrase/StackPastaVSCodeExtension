import { Account } from './Account';
import axios from 'axios';

export class ViewHistoryDatabaseWriter{

    public async writeViewHistory(id:string,tags:string[],title:string,site:string) : Promise<boolean> {
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
        data.ID = id;
        data.Site = site;
        data.Title = title;
        data.UserID = userID ;
        data.Date = dateTime ;
        data.Tags = tags;
        // console.log(data);

        var databaseURL = await account.getDatabaseURL();

        const URL:string = databaseURL + "/api/addViewHistory"; 
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