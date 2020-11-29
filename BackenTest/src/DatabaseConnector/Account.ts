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
        var l = this.jsonObject.Account.lenght
        return (l != 0)
    }

    public async Login(userID:string,password:string,DatabaseURL:string): Promise<string> {
        var result : string;
        this.DatabaseURL = DatabaseURL;
        var json:any =  JSON.parse(
            '{"UserID":"'+ userID + '","Password" :"' + password + '"}');

            var authenURL:string = this.DatabaseURL + "api/authen";
            
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
        var account:any ;
        account = JSON.parse('{"Account":[{"password":"'+this.password+'","login":true,"userID":"'+this.userID+'","databaseURL":"'+this.DatabaseURL+'"}]}');
        this.saveJSONFile(this.filePath,account);
    }


}