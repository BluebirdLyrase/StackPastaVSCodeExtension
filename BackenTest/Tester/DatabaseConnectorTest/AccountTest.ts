import {Account} from '../../src/DatabaseConnector/Account';

//tsc to compilr
//node path to run

async function run() {
    const x:Account = new Account();
    // let x = new Account();
    // var q = await x.Logout()
    // console.log("what "+q)

    var w = await x.Login("admin","admin","http://localhost:8095");
    console.log(w);
    var c = await x.getDatabaseURL();
    console.log(c);

    // var e = await x.Login("admwefwefin","admiq13124n","http://localhost:8095/");
    // console.log(e);

    // var r = await x.Login("admin","admin","http://localhowst:8095/qwqe1/wfq4gqgq34");
    // console.log(r);

    var t = await x.isLoggedIn();
    var z = await x.getUserID();
    console.log(z);

}

run();