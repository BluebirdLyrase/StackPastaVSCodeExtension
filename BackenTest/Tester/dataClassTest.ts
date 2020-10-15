import {StackQuestion} from '../src/DataClass/StackQuestion';
import {StackAnswer} from '../src/DataClass/StackAnswer';
import {StackComment} from '../src/DataClass/StackComment';

async function run() {

    let AC = new StackComment("aCommentbodyyy",20,"ACowner");
    let AC2 = new StackComment("aCommentbodyyy",20,"ACowner");
    let AC3 = new StackComment("aCommentbodyyy",20,"ACowner");

    let AAC: StackComment[] = new Array;
    // AAC = new StackComment[];
    AAC.push(AC);
    AAC.push(AC2);
    AAC.push(AC3);

    let Ans = new StackAnswer("Answer bodyyy",202,"Aowner","AownerImage",true,AAC,true);
    let Ans2 = new StackAnswer("Answer 2 bodyyy",202,"Aowner","AownerImage",true,AAC,true);
    let AAA: StackAnswer[] = new Array;
    // AAA = new StackAnswer[2]

    AAA.push(Ans);
    AAA.push(Ans2);

    let Q = new StackQuestion("123","Qtitle","Qbodayyyy",AAC,AAA,true,true,"Qowner","QownerImage",23,null,false,"site");

    console.log(Q);

}

run();