                      // Answer 1


const input = "Hello World";

setTimeout(() => {
  const reversedString = input.split("").reverse().join("");
  console.log(reversedString);
}, 2000);



                      // Answer 2

const delay = 3000; // Delay in milliseconds (3 seconds)

setTimeout(() => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
  console.log(`Random number: ${randomNumber}`);
}, delay);

for (let i = delay / 1000; i > 0; i--) {
  setTimeout(() => {
    console.log(`Time remaining: ${i} second(s)`);
  }, delay - (i * 1000));
}



                  // Answer 3

const items = {
  "Apple": 1.5,
  "Banana": 0.75,
  "Orange": 1.25
};

const exchangeRate = 80; // 1 USD to 80 INR

const itemsInRupees = Object.entries(items).map(([itemName, price]) => {
  return [itemName, price * exchangeRate];
});

console.log(Object.fromEntries(itemsInRupees));



                  //Answer 4

const books = [
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 },
  { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
  { title: "The Martian", author: "Andy Weir", year: 2011 },
  { title: "Gone Girl", author: "Gillian Flynn", year: 2012 }
];

const recentBooks = books.filter(book => book.year >= 2010).map(book => {
  return {
    title: book.title,
    author: book.author.toUpperCase()
  };
});

console.log(recentBooks);


                    //Answer 5


const url = "https://www.google.com";
const regex = /^(http|https):\/\/[a-zA-Z0-9-._~:@#%&;+=\?]+.[a-zA-Z]+$/;

if (regex.test(url)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}
