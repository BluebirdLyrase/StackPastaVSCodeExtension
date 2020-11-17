function closeTab() {
    command('extension.vscexpressclose', 'index.html');
}

function searchformstack(){

    console.log("searchformstack")

    pageSize = "40"
    order = $('#order').val();
    sort = $('#sortby').val();
    intitle = $('#searchtext').val();
    tagContent = $('#tags').val();
    site = $('#site').val();

    if(tagContent!=""){
        tagContent = "&tagged=" + tagContent;
    }

    console.log(intitle);
    console.log(order);
    console.log(sort);
    console.log(tagContent);
    console.log(site);

    var url = "https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=" + this.pageSize
        + "&order=" + this.order + "&sort=" + this.sort + "&q=" + this.intitle + "&accepted=True" + tagContent
        + "&site=" + this.site + "&filter=!4(L6lo9D9J9Y3508i";

    console.log(url)

    $.get(url, function (data, status) {
        $("#searchResult").empty();

        data.items.forEach(function(item, index) {

        var card = `
        <li class="list-group-item card-body bg-secondary stackcard" onclick="ContentView('`+item.question_id +`')" ><span class="AnswerNumber" >`
        +item.answer_count + `</span>   `+ item.title+`</li>`
        $("#searchResult").append(card);

         });

        console.log(data)

    });
}

function createSiteList(){
    console.log('createSiteList()');    
    siteList = ["Stackoverflow","Devops","Gamedev","Stackapps","Superuser","Sqa","Softwareengineering","Reverseengineering","Webapps","Webmasters"];
    siteList.forEach(function(item, index) {
        $("#site").append(new Option(siteList[index], siteList[index]));
    });
}
createSiteList();

function ContentView(id){
    console.log(id);
    command('stackpasta.allContent',id);
}