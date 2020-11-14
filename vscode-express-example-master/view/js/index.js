
function searchformstack(){

    console.log("searchformstack")

    pageSize = "40"
    order = "asc"
    sort = "relevance"
    intitle = "Eclipse"
    tagContent = ""
    site = "stackoverflow"

    var url = "https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=" + this.pageSize
        + "&order=" + this.order + "&sort=" + this.sort + "&q=" + this.intitle + "&accepted=True" + tagContent
        + "&site=" + this.site + "&filter=!4(L6lo9D9J9Y3508i";

    $.get(url, function (data, status) {

        $("#searchResult").append(JSON.stringify(data));
        console.log(data)

    });
}