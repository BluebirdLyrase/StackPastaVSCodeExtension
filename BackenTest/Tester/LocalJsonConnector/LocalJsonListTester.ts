import {LocalJsonList} from '../../src/LocalJsonConnecter/LocalJsonList';

//tsc to compilr
//node path to run

async function run() {
let x = await new LocalJsonList("Favorite");
console.log(x.getSize())
x.clear();
}

run();