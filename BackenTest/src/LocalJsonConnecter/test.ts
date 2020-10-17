// import fs from 'fs';
import path from 'path';

//maybe need to add "type": "module" in package.js
//need to add "esModuleInterop":true in tsconfig


export class AAtest{

    public test22(){
const directoryPath = path.join(__dirname, '/../../../../StackPastaVsCode');
console.log(directoryPath);
    }
}