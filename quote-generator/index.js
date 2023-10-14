window.onload = function loadQuote() {

    getQuote("https://type.fit/api/quotes?ref=hackernoon.com");

    async function getQuote(url) {
        const response = await fetch(url);
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex].text;
        const authorString = data[randomIndex].author;

        if(authorString == "type.fit"){
            var randomAuthor = "Unknown"
        }else{
            const authorName = authorString.split(",");
            var randomAuthor = authorName[0];
        }

        document.getElementById("quote").innerHTML = `“${randomQuote}”`; 
        document.getElementById("author").innerHTML = randomAuthor;
    }
}





function generateQuote(){
    
    getQuote("https://type.fit/api/quotes?ref=hackernoon.com");

    async function getQuote(url) {
        const response = await fetch(url);
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex].text;
        const authorString = data[randomIndex].author;

        if(authorString == "type.fit"){
            var randomAuthor = "Unknown"
        }else{
            const authorName = authorString.split(",");
            var randomAuthor = authorName[0];
        }

        document.getElementById("quote").innerHTML = `“${randomQuote}”`; 
        document.getElementById("author").innerHTML = randomAuthor;
    }

   
}


