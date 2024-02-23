// Užduotys su OOP

// https://codeacademy.online/dashboard/modules/js2/2FUtiCnKARUxCyivOEag/129794049

// Knygos klasė
// Sukurkite Book klasę su savybėmis title, author ir year. Pridėkite metodą getSummary(), kuris grąžina santrauką apie knygą.
// Inicializacijos ir naudojimo pavyzdys:
// const book1 = new Book("Book Title", "Author Name", "2023");
// console.log(book1.getSummary()); // "Book Title by Author Name published in 2023"
 class Book {
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year}
    getSummary() {
        const summary = `Book Title: "${this.title}" by Author: ${this.author}, published in ${this.year}`
        return summary}}
const book1 = new Book ("Altoriu sesely", 'Vincas Mykolaitis-Putinas', 1933)
const book2 = new Book ("Balta drobule", 'Antanas Škėma', 1958)
console.log(book1.getSummary())
console.log(book2.getSummary())
// CAO atsakymas:
/*class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;}
    getSummary() {return `${this.title} by ${this.author} published in ${this.year}`;}}*/

// Muzikos studentas
// Sukurkite klasę MusicStudent, kuri saugo informaciją apie muzikos mokyklos studentus. Studentas turi name (vardas), instrument (muzikos instrumentas, kurį jis mokosi groti) ir level (lygis, pvz., pradedantysis, pažengęs). 
// Pridėkite metodą practice, kuris didina studento lygį. Pagal nutylėjimas studento lygis turėtų būti "beginner".
// Inicializacijos ir naudojimo pavyzdys:
// const student = new MusicStudent("Anna", "piano");
// student.practice();
// console.log(`${student.name}, ${student.instrument}, ${student.level}`); // "Anna, piano, intermediate"
 class MusicStudent {
    constructor(name, instrument, level) {
        this.name = name
        this.instrument = instrument
        this.level = level}
    practice(){const studentLevel = `${this.name}, ${this.instrument}, ${this.level}`
        return studentLevel}}
const student1 = new MusicStudent('Anna', 'piano', 'intermediate')
const student2 = new MusicStudent('John', 'quitar', 'beginer')
const student3 = new MusicStudent('Christine', 'violin', 'advanced')
console.log(student1.practice())
console.log(student2.practice())
console.log(student3.practice())
// CAO Atsakymas
// class MusicStudent {constructor(name, instrument, level = "beginner") {
//         this.name = name;
//         this.instrument = instrument;
//         this.level = level;}
//     practice() {
//         if (this.level === "beginner") {
//             this.level = "intermediate";}
//         else if (this.level === "intermediate") {
//             this.level = "advanced";}}}

// Prekių krepšelis
// Sukurkite ShoppingCart klasę, kuri gali pridėti prekes (addItem), pašalinti prekes (removeItem) ir apskaičiuoti bendrą kainą (calculateTotal). Prekės yra objektai su savybėmis name ir price.
// Inicializacijos ir naudojimo pavyzdys:
// const cart = new ShoppingCart();
// cart.addItem({ name: "Apple", price: 0.99 });
// cart.addItem({ name: "Bread", price: 1.29 });
// console.log(cart.calculateTotal()); // 2.28
// cart.removeItem("Apple");
// console.log(cart.calculateTotal()); // 1.29
// CAO Atsakymas:

 class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

// Kino teatro vietų rezervavimas
// Sukurkite MovieTheater klasę, skirtą valdyti kino teatro sėdimų vietų rezervacijoms. Klasė turi turėti šias savybes: rows (eilučių skaičius) ir seatsPerRow (vietų skaičius eilutėje). Vietos turi būti saugomos dvimačiame masyve, kur kiekviena vieta gali būti true (užimta) arba false (laisva). Taip pat klasėje turi būti šie metodai:
// bookSeat(row, seat) - metodas vietos rezervavimui. Jei vieta jau užimta, turi būti grąžinamas pranešimas apie tai.
// cancelBooking(row, seat) - metodas rezervacijos atšaukimui. Jei vieta nebuvo rezervuota, turi būti grąžinamas atitinkamas pranešimas.
// checkAvailability(row, seat) - metodas, grąžinantis true arba false, priklausomai nuo to, ar vieta yra laisva.
// Inicializacijos ir naudojimo pavyzdys:
// const theater = new MovieTheater(5, 5);
// theater.bookSeat(2, 3);
// console.log(theater.checkAvailability(2, 3)); // false
// theater.cancelBooking(2, 3);
// console.log(theater.checkAvailability(2, 3)); // true
// CAO Atsakymas:
class MovieTheater {
    constructor(rows, seatsPerRow) {
        this.seats = Array.from({ length: rows }, () => Array(seatsPerRow).fill(false));
    }

    bookSeat(row, seat) {
        if (!this.seats[row][seat]) {
            this.seats[row][seat] = true;
            console.log(`Seat booked at row ${row}, seat ${seat}`);
        } else {
            console.log("Seat already booked");
        }
    }

    cancelBooking(row, seat) {
        if (this.seats[row][seat]) {
            this.seats[row][seat] = false;
            console.log(`Booking canceled at row ${row}, seat ${seat}`);
        } else {
            console.log("Seat not booked");
        }
    }

    checkAvailability(row, seat) {
        return !this.seats[row][seat];
    }
}

// Bibliotekos Valdymo Sistema
// Jūs turite sukurti dvi klases: Book ir Library. 
// Book klasė atstovauja knygą ir turi savybes title (pavadinimas), author (autorius), ir year (išleidimo metai). Gali panaudoti iš pirmos užduoties. 
// Library klasė valdo knygų kolekciją ir skolinimo procesą. Ji turi šias funkcijas:
// addBook(book): Prideda naują Book objektą į bibliotekos kolekciją.
// lendBook(bookTitle, userName): Išduoda knygą vartotojui, jei ji yra prieinama. Saugo informaciją apie skolininką.
// returnBook(bookTitle): Grąžina knygą į biblioteką.
// listAvailableBooks(): Atspausdina sąrašą visų prieinamų knygų.
// Inicializacijos ir naudojimo pavyzdys:
// const library = new Library();
// library.addBook(new Book("Book1", "Author1", "2020"));
// library.addBook(new Book("Book2", "Author2", "2021"));
// library.lendBook("Book1", "User1");
// library.listAvailableBooks(); // "Book2 by Author2 published in 2021"
// library.returnBook("Book1");
// library.listAvailableBooks(); // "Book2 by Author2 published in 2021", "Book1 by Author1 published in 2020"
 // CAO Atsakymas:
 class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    
    getSummary() {
        return `${this.title} by ${this.author} published in ${this.year}`;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.lentBooks = new Map();
    }

    addBook(book) {
        this.books.push(book);
    }

    lendBook(bookTitle, userName) {
        const book = this.books.find(book => book.title === bookTitle);
        if (book) {
            this.books = this.books.filter(b => b !== book);
            this.lentBooks.set(book, userName);
        } else {
            console.log("Book not available");
        }
    }

    returnBook(bookTitle) {
        const book = [...this.lentBooks.keys()].find(book => book.title === bookTitle);
        if (book) {
            this.books.push(book);
            this.lentBooks.delete(book);
        }
    }

    listAvailableBooks() {
        console.log("Available Books:");
        this.books.forEach(book => console.log(book.getSummary()));
    }
}