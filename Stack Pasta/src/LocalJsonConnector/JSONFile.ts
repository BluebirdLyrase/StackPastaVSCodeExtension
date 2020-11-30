import fs from 'fs';
import path from 'path';

export class JSONFile{

    protected async deleteFile(currentDirectoryPath:string){
        fs.unlinkSync(currentDirectoryPath);
    }

    protected async getCurrentDirectoryPath(directoryPath:string,arrayName:string):Promise<string> {

        ////////////Create File if it does not exist/////////////////////////////////
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath);
        }

        const currentDirectoryPath = path.join(directoryPath, arrayName+'.json');
        console.log(currentDirectoryPath);
        if (!fs.existsSync(currentDirectoryPath)) {
            fs.writeFile(currentDirectoryPath, '', function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log(arrayName+" File created!");
            });
        }
        return currentDirectoryPath;
}

protected async saveJSONFile(currentDirectoryPath:string,newStringObject:any){

    console.log(JSON.stringify(newStringObject));

    
    fs.writeFile(currentDirectoryPath, JSON.stringify(newStringObject),  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("File added!");
        console.log(newStringObject);
    });

}



}   