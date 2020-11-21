import {LocalJsonList} from '../../src/LocalJsonConnecter/LocalJsonList';

//tsc to compilr
//node path to run

async function run() {
let x = await new LocalJsonList("Favorite");
console.log(x.getSize());
x.delete(0);
console.log(x.getJsonObject);
// x.clear();
// console.log("xx"==="xx");
// var q = "xx";
// var w = "xxx"
// var e = "XX"
// var r = "qewok"
// var t = "qexxwok"
// console.log(q===w)
// console.log(q===e)
// console.log(q===r)
// console.log(q===t)
// console.log(r===t)
// console.log(w===t)

// console.log(q===q&&r===t)
// console.log(w===t&&q===q)
// console.log(q===q||q===t)

}

run();