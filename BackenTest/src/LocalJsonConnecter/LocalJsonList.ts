import fs from 'fs';
import path from 'path';
import {JSONFile} from './JSONFile';

//maybe need to add "type": "module" in package.js
//need to add "esModuleInterop":true in tsconfig
// npm install --save-dev @types/node


export class LocalJsonList extends JSONFile{
    os = require('os');
    protected directoryPath = path.join(this.os.homedir(), 'StackOverFlowHelper');
    protected filePath: string;
    protected arrayName: string;
    protected jsonObject: any;
    protected delConfrimMsg = "Are you sure you want to delete this?";

    public get getJsonObject(): any[]  {
		return this.jsonObject;
	}

    private async checkfile() {

        ////////////Create File if it does not exist/////////////////////////////////
        if (!fs.existsSync(this.directoryPath)) {
            fs.mkdirSync(this.directoryPath);
        }

        if (!fs.existsSync(this.filePath)) {
            fs.writeFile(this.filePath, "{" + this.arrayName + ":[]}", function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log("File created!");
            });
        }

    }

    public constructor(filename: string) {
        super();
        this.filePath = path.join(this.directoryPath, filename + ".json");
        this.arrayName = filename;
        this.checkfile();

        var file = fs.readFileSync(this.filePath, 'utf-8');
        this.jsonObject = JSON.parse(file);

    }

    public async delete(index: number) {
        var item = this.jsonObject[this.arrayName];
        this.jsonObject[this.arrayName].splice(index, 1);
        console.log('deleted item '+item[index]);
        await this.saveJSONFile(this.filePath,this.jsonObject);
    }

    public async clear() {
        await this.deleteFile(this.filePath);
    }

    public async getSize(): Promise<number> {
        var stats = fs.statSync(this.filePath)
        var fileSizeInBytes = stats.size;
        return fileSizeInBytes;
    }

}