import {ViewHistoryDatabaseWriter} from '../../src/DatabaseConnector/ViewHistoryDatabaseWriter';

//tsc to compilr
//node path to run

async function run() {
    const x:ViewHistoryDatabaseWriter = new ViewHistoryDatabaseWriter();

    var t = await x.writeViewHistory("dd",["aa","ss"],"ss","qq");
    console.log(t);

}

run();