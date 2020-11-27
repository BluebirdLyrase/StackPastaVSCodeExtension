import {Account} from '../../src/DatabaseConnector/Account';

//tsc to compilr
//node path to run

async function run() {

    let x = new Account();
    var q = x.Logout()
    console.log("what "+q)

}

run();