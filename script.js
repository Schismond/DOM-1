

//select quote and teller 

let quote = document.querySelector('.quote');
let teller = document.querySelector('.teller');
let button = document.querySelector('#btn');

const quotes = [
    {quote : '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    personne : '"Nelson Mandela"'},
    {quote : '"The way to get started is to quit talking and begin doing."',
    personne : '"Walt Disney"'},
    {quote : '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."',
    personne : '"Steve Jobs"'},
    {quote : '"If life were predictable it would cease to be life, and be without flavor."',
    personne : '"Eleanor Roosevelt"'},
    {quote : '"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough."',
    personne : '"Oprah Winfrey"'},
    {quote : '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success."',
    personne : '"James Cameron"'},
    {quote : '"Life is what happens when you\'re busy making other plans."',
    personne : '"John Lennon"'}
];



button.addEventListener('click', function(){
    
    let randomise = Math.floor(Math.random() * quotes.length + 1)
    quote.innerText = quotes[randomise].quote;
    teller.innerText = quotes[randomise].personne;
})