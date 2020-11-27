import {FavoriteWriter} from '../../src/LocalJsonConnector/FavoriteWriter';

//tsc to compilr
//node path to run

async function run() {

    let x = await new FavoriteWriter();
    x.saveFavorite("1","1","1");
    // var fav = x.getJsonObject;
    // console.log(fav);
    // console.log(fav.Favorite.length);
    // x.delete(fav.Favorite.length);
    // console.log(fav);

}

run();