 // Variables
 let btn = document.querySelector("#new-quote")
 let quote = document.querySelector(".quote")
 let person = document.querySelector(".person")

 const quotes =  [
    {
        quotes:"I’m not a great programmer; I’m just a good programmer with great habits.",
        person:"Kent Beck"
    },
    {
        quotes:"Good programmers know what to write. Great ones know what to rewrite and reuse",
        person:"Eric S. Raymond"
    },
    {
        quotes:"Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter",
        person:"Eric S. Raymond"
    },
    {
        quotes:"Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
        person:"Martin Fowler"
    },
    {
        quotes:"Good programmers use their brains, but good guidelines save us having to think out every case",
        person:"Francis Glassborow"
    },
    {
        quotes:"Documentation is the castor oil of programming. Managers think it is good for programmers and programmers hate it",
        person:"Gerald Weinberg"
    },
    {
        quotes:"Common programmer thought pattern: there are only three numbers: 0, 1, and n",
        person:"Joel Spolsky"
    },
    {
        quotes:"The most disastrous thing that you can ever learn is your first programming language",
        person:"Alan Kay"
    },
    {
        quotes:"The bearing of a child takes nine months, no matter how many women are assigned",
        person:"Frederick Brooks"
    }, {
        quotes:"It’s not a bug; it’s an undocumented feature",
        person:"Anonymous"
    },
 ]

 btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerHTML = quotes[random].quotes;
    person.innerHTML = quotes[random].person;
 })