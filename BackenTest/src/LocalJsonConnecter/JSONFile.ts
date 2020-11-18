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

protected async saveJSONFile(currentDirectoryPath:string,newStringObject:string){

    ////////////Read then add new Value////////////////////////////////////
    var file = fs.readFileSync(currentDirectoryPath, 'utf-8');
    console.log(file);

    let newJsonObject = JSON.parse(newStringObject);

    if(file==""){
        file = '{"Favorite":[]}';
    }
    let oldJsonObject = JSON.parse(file);
    oldJsonObject['Favorite'].push(newJsonObject);

    console.log('================================');
    console.log(oldJsonObject);

    fs.writeFile(currentDirectoryPath, JSON.stringify(oldJsonObject),  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("File added!");
    });

}



}   