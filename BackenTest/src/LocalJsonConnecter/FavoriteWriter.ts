import {LocalJsonList} from './LocalJsonList';


export class FavoriteWriter extends LocalJsonList{


	constructor() {
        super("Favorite");
    }
    
    public async saveFavorite(title:string,id:string,site:string): Promise<string>{
        var msg = "Failed to added " +title+" to Favorite";
        var fav = this.jsonObject.Favorite;
        var lenght = fav.length;
        console.log("Fav Lenght : "+length);
        var isNotDuplicate = true;

        fav.forEach(function (value,index){
            console.log(index+"::"+value.ID+value.Site)
            if(value.ID===id&&value.Site===site){
                console.log("isDupe")
                isNotDuplicate = false;
                msg = title+" is Duplicate "
            }
        });

        if(isNotDuplicate){
            fav.push({ Site: site, Title: title,ID: id});
            msg = "Succesfully added "+title+" to Favorite"
        }

        
        return msg;
    }


}