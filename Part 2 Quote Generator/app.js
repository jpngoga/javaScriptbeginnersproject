// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{


        quote: "Life is not about getting and having, it is about giving and being.",
        person: "Kevin Kruse"
    },
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.",
        person: "Napoleon Hill"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        person: "Albert Einstein"
    },
    {
        quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        person: "Robert Frost"
    },
    {
        quote: "I attribute my success to this: I never gave or took any excuse.",
        person: "Florence Nightingale"
    },
    {
        quote: "You miss 100% of the shots you do not take.",
        person: "Wayne Gretzky"
    },
    {
        quote: "I ve missed more than 9000 shots in my career. I ve lost almost 300 games. 26 times I ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        person: "Michael Jordan"
    },
    {
        quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
        person: "Amelia Earhart"
    },
    {
        quote: "Every strike brings me closer to the next home run.",
        person: "Babe Ruth"
    },
    {
        quote: "Definiteness of purpose is the starting point of all achievement.",
        person: "W. Clement Stone"
    },
    {
        quote: "We must balance conspicuous consumption with conscious capitalism.",
        person: "Kevin Kruse"
    },
    {
        quote: "Life is what happens to you while you re busy making other plans.",
        person: "John Lennon"
    },
    {
        quote: "We become what we think about.",
        person: "Earl Nightingale"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
        person: "Mark Twain"
    },
    {
        quote: "Life is 10% what happens to me and 90% of how I react to it.",
        person: "Charles Swindoll"
    },
    {
        quote: "The most common way people give up their power is by thinking they dont have any.",
        person: "Alice Walker"
    },
    {
        quote: "The mind is everything. What you think you become.",
        person: "Buddha"
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        person: "Chinese Proverb"
    },
    {
        quote: "An unexamined life is not worth living.",
        person: "Socrates"
    },
    {
        quote: "Eighty percent of success is showing up.",
        person: "Woody Allen"
    },
    {
        quote: "Your time is limited, so dont waste it living someone elses life.",
        person: "Steve Jobs"
    },
    {
        quote: "Winning isnt everything, but wanting to win is.",
        person: "Vince Lombardi"
    },
    {
        quote: "I am not a product of my circumstances. I am a product of my decisions.",
        person: "Stephen Covey"
    },
    {
        quote: "Every child is an artist.  The problem is how to remain an artist once he grows up.",
        person: "Pablo Picasso"
    },
    {
        quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
        person: "Christopher Columbus"
    },
    {
        quote: "Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        person: "Maya Angelou"
    },
    {
        quote: "Either you run the day, or the day runs you.",
        person: "Jim Rohn"
    },
    {
        quote: "Whether you think you can or you think you cant, you re right.",
        person: "Henry Ford"
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        person: "Mark Twain"
    },
    {
        quote: "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
        person: "Johann Wolfgang von Goethe"
    },
    {
        quote: "The best revenge is massive success.",
        person: "Frank Sinatra"
    },
    {
        quote: "People often say that motivation doesnt last. Well, neither does bathing.  That is why we recommend it daily.",
        person: "Zig Ziglar"
    },
    {
        quote: "Life shrinks or expands in proportion to ones courage.",
        person: "Anais Nin"
    },
    {
        quote: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
        person: "Vincent Van Gogh"
    },
    {
        quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        person: "Aristotle"
    },
    {
        quote: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
        person: "Jesus"
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "Go confidently in the direction of your dreams.  Live the life you have imagined.",
        person: "Henry David Thoreau"
    },
    {
        quote: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
        person: "Erma Bombeck"
    },
    {

        quote: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
        person: "Booker T. Washington"
    },
    {
        quote: "Certain things catch your eye, but pursue only those that capture the heart.",
        "author": " Ancient Indian Proverb"
    },
    {
        quote: "Believe you can and you re halfway there.",
        person: "Theodore Roosevelt"
    },
    {
        quote: "Everything you ve ever wanted is on the other side of fear.",
        person: "George Addair"


    },
];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})