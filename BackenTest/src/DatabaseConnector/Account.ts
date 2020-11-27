import {LocalJsonList} from '../LocalJsonConnector/LocalJsonList';

export class Account extends LocalJsonList{

    constructor() {
        super("Account");
    }

    private DatabaseURL : string;
	private userID : string;
	private password : string;
	private LoginMSG : string;
	private success = "Successfully logged in";
	private wrong = "Incorrect username or password";
	private error = "Server unavailable";
    private connectionstatus : string;
    
    public async Logout() :Promise<string>{

        if(this.haveAccount()){
            var newfile = this.jsonObject;
            newfile.Account[0].login = false;
            console.log('logout');
            this.saveJSONFile(this.filePath,newfile);
            console.log(this.filePath + "::" + newfile.Account[0].login);
            return "What is this?";
        }

    }

    public async haveAccount():Promise<boolean>{
        var l = this.jsonObject.Account.lenght 
        return (l != 0)
    }


}