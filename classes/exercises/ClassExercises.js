// Define your Book class here:
class Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    pageCount,
    checkedOut,
    isDiscarded
  ) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.ISBN = ISBN;
    this.pageCount = pageCount;
    this.checkedOut = checkedOut;
    this.isDiscarded = isDiscarded;
  }
  checkout(num) {
    this.checkedOut += num;
  }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    pageCount,
    checkedOut,
    isDiscarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      ISBN,
      pageCount,
      checkedOut,
      isDiscarded
    );
  }
  discard() {
    let currentYear = 2024;
    let age = currentYear - this.copyrightDate;
    if (age > 5) {
      this.isDiscarded = "Yes";
    }
  }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    ISBN,
    pageCount,
    checkedOut,
    isDiscarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      ISBN,
      pageCount,
      checkedOut,
      isDiscarded
    );
  }
  discard() {
    if (this.checkedOut > 100) {
      this.isDiscarded = "Yes";
    }
  }
}

// Declare the objects for exercises 2 and 3 here:
let pride = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  "1111111111111",
  432,
  32,
  "No"
);
//console.log(pride);

let topSecret = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  "0000000000000",
  1147,
  1,
  "No"
);
//console.log(topSecret);

// Code exercises 4 & 5 here:
pride.discard();
console.log(`${pride.title} is discarded: ${pride.isDiscarded}`);
topSecret.discard();
console.log(`${topSecret.title} is discarded: ${topSecret.isDiscarded}`);

console.log(`${pride.title} has been checked out ${pride.checkedOut} times`);
pride.checkout(5);
console.log(`${pride.title} has been checked out ${pride.checkedOut} times`);
