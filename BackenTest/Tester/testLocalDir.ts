import {AAtest} from '../src/LocalJsonConnecter/test';

//tsc to compilr
//node path to run

async function run() {
let x = new AAtest();
await x.test22();
}

run();