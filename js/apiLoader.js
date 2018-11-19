function showMeNews() {
    var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=efe04172a5504a1882090998b0133719';
    var req = new Request(url);
    fetch(req)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            drawData(data.articles);
        });

}