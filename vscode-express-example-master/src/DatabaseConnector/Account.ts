import { LocalJsonList } from '../LocalJsonConnector/LocalJsonList';
import axios from 'axios';

export class Account extends LocalJsonList {

    constructor() {
        super("Account");
    }

    private DatabaseURL: string;
    private userID: string;
    private password: string;
    private success = "Successfully logged in";
    private wrong = "Incorrect username or password";
    private error = "Server unavailable";
    private connectionstatus: string;

    public async Logout(): Promise<string> {

        var result : string;
        if (this.haveAccount()) {
            var newfile = this.jsonObject;
            newfile.Account[0].login = false;
            console.log('logout');
            this.saveJSONFile(this.filePath, newfile);
            console.log(this.filePath + "::" + newfile.Account[0].login);
            result = "Logout Succeddfully";
        } else {
            result = "You have to Login inorder to Logout";
        }
        return result;

    }

    public async haveAccount(): Promise<boolean> {
        await this.createJson();
        // console.log(typeof this.jsonObject.Account[0]==='undefined');
        const l:boolean = typeof this.jsonObject.Account[0]==='undefined';
        console.log("l is "+l);
        return !l
    }

    public async Login(userID:string,password:string,DatabaseURL:string): Promise<string> {
        var result : string = this.error;
        this.DatabaseURL = DatabaseURL;
        const json:any =  JSON.parse(
            '{"UserID":"'+ userID + '","Password" :"' + password + '"}');

            const authenURL:string = this.DatabaseURL + "/api/authen"; 
            try {
                console.log(authenURL);
                const response = await axios.post(authenURL,json);
                // console.log(response);
                console.log("response is = " + response.data);
                if(response.data){  
                    await super.checkfile();
                    result = this.success;
                    this.userID = userID;
                    this.password = password;
                    this.setDatabase();
                }else{
                    result = this.wrong;
                }
              } catch (error) {
                console.error(error);
                result = this.error;
              }

        return result;
    }

    private async setDatabase(){
        // const account:any = JSON.parse('{}');
        const account:any  = JSON.parse('{"Account":[{"password":"'+this.password+'","login":true,"userID":"'+this.userID+'","databaseURL":"'+this.DatabaseURL+'"}]}');
        // account.Account[0].passwrod = this.password;
        // account.Account[0].login = true;
        // account.Account[0].userID = this.userID;
        // account.Account[0].databaseURL = this.DatabaseURL;
        this.saveJSONFile(this.filePath,account);
    }

    public async isLoggedIn(): Promise<boolean>{
        await this.createJson();
        var result:boolean = false;
        const haveAccount:boolean = await this.haveAccount();
        console.log('haveAccount'+haveAccount);
        if(haveAccount){
            try{
                this.userID = this.jsonObject.Account[0].userID;
                this.password = this.jsonObject.Account[0].password;
                this.DatabaseURL = this.jsonObject.Account[0].databaseURL;
                // console.log(userID+password+databaseURL);
                const json:any =  JSON.parse(
                    '{"UserID":"'+ this.userID + '","Password" :"' + this.password + '"}');
                    const authenURL:string = this.DatabaseURL + "/api/authen"; 
                    const response = await axios.post(authenURL,json);
                    if(response.data){  
                        await super.checkfile();
                        result = true 
                    }
            }catch(error){
                console.log(error);
                console.log("Error logging in from isLoggedIn");
                this.Logout();
            }
        }

        return result;
    }

    public async getUserID():Promise<string> {
        await this.createJson();
        return this.jsonObject.Account[0].userID;
    }

    public async getDatabaseURL():Promise<string> {
        await this.createJson();
        return this.jsonObject.Account[0].databaseURL;
    }

}