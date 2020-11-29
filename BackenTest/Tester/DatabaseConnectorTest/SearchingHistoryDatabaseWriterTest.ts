import {SearchingHistoryDatabaseWriter} from '../../src/DatabaseConnector/SearchingHistoryDatabaseWriter';

//tsc to compilr
//node path to run

async function run() {
    const x:SearchingHistoryDatabaseWriter = new SearchingHistoryDatabaseWriter();

    var t = await x.writeSearchingHistory("dd","aa","ss","qq","ww");
    console.log(t);

}

run();