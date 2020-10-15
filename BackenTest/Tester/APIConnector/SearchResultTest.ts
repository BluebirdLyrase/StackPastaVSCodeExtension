import {SearchResult} from '../../src/APIConnector/OldSearchResult';

async function run() {
let x = new SearchResult("Eclipse",1,40,"asc", "relevance", "stackoverflow","");
await x.createJson();
let z = x.$titleList;
console.log(z);
console.log(z[3]);
console.log(x.$haveResult);
}
 run()