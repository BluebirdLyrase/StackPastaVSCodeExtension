import fs from 'fs';
import path from 'path';

//maybe need to add "type": "module" in package.js
//need to add "esModuleInterop":true in tsconfig
// npm install --save-dev @types/node


export class AAtest {

    private fs = require('fs');

    private async checkfile(directoryPath:string):Promise<string> {

                ////////////Create File if it does not exist/////////////////////////////////
                if (!fs.existsSync(directoryPath)) {
                    fs.mkdirSync(directoryPath);
                }
        
                const currentDirectoryPath = path.join(directoryPath, 'Favorite.json');
        
                if (!fs.existsSync(currentDirectoryPath)) {
                    fs.writeFile(currentDirectoryPath, '', function (err) {
                        if (err) {
                            return console.error(err);
                        }
                        console.log("File created!");
                    });
                }
                return currentDirectoryPath;
                
    }

    private async writeJson(currentDirectoryPath:string,newStringObject:string){

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

    public async test22() {
        //this will be in Document folder/StackOverflowHelper
        const directoryPath = path.join(__dirname, '../../../../../../StackOverFlowHelper');
        console.log(directoryPath);

        const currentDirectoryPath = await this.checkfile(directoryPath)
        console.log("test")
        var Site = "stackoverflow";
        var Title = "this is a test title";
        var ID = "000000";

        let newStringObject:string = '{"Site":"'+Site+'",'+
        '"Title":"'+Title+'",'+
        '"ID":"'+ID+'"}'
        await this.writeJson(currentDirectoryPath,newStringObject);

    }




}

