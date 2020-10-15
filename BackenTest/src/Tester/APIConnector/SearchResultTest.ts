import {SearchResult} from '../../src/APIConnector/SearchResult';

async function run() {
let x = new SearchResult("Eclipse",1,40,"asc", "relevance", "stackoverflow",null);
await x.createJson();
let z = x.getTitleList;
console.log(z);
console.log(z[3]);
console.log(x.IshaveResult);
}
 run()