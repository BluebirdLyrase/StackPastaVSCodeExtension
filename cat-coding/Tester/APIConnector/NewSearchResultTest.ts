import {SearchResult} from '../../src/APIConnector/SearchResult';

async function run() {
let x = new SearchResult("Eclipse",1,40,"asc", "relevance", "stackoverflow","");
await x.createJson();
let z = x.$items;
for (let i = 0; i < x.$lenght ; i++) {
    console.log("title : "+z[i].title);
    console.log("ID : "+z[i].question_id);
}
}
 run();