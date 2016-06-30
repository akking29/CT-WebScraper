var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

var url = "https://origin-web-scraping.herokuapp.com/";

request(url, function(error, response, body) {
    if (!error) {
        var $ = cheerio.load(body);

       /*	var book = {
       		title : "",
       		imageUrl : "",
       		author : "",
       		price: ""
       	};
			*/
       	$(".panel").each(function(name) {
       		var name = $(this).find('panel-heading').text();
       		console.log(name);
       	});
       		/*
        var title =[];
        $("[class='panel-heading']").each(function(i,elem){
        	title[i]= $(this).text();
        });
        book.title=title;
        
        var imageUrl = [];
        $("[class='img-responsive']").each(function(i, elem) {
            imageUrl[i] = $(this).attr('src');
        });
        book.imageUrl = imageUrl;

        var author = [];
        $("[class='panel-body']").children('p').each(function(i,elem){
        	author[i]=$(this).text();
        });
        book.author = author;

        var price = [];
        $("[class='green']").each(function(i, elem){
        	price[i]=$(this).text();
        });
        book.price = price;

        console.log(title+" "+imageUrl+""+author+""+price);
        */
    } else {
        console.log("we've encountered an error: " + error);
    }
    	/*
    fs.writeFile('books.json', JSON.stringify(book, null, 4), function(error){
    	console.log('Code Test Complete - Check directory');
    }) 
    	console.log('error');
    	*/
});
