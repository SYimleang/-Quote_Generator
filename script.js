const apiUrl = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// Get quote from "quotable" API
async function getQuote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const fullQuote = `${data.content} --- by ${data.author}`;
        quote.textContent = data.content;
        author.textContent = data.author;
    } catch (error) {
        console.log("Error fetching quote: ", error);
    }
}

getQuote(apiUrl);

// Post function on X
const post = () =>
  window.open(
    `https://twitter.com/intent/tweet?text=${quote.textContent} --- by ${author.textContent}`,
    "post Window",
    "width=800, height=500"
  );