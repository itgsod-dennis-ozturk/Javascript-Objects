function book (title,author,price) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.reduction = function (discount) {
        this.c *= 1.0 - discount;
    };
}

//Skapar en funktion som har en titel,författare,pris

First_book = new book("Lotr", "Tolkien", 30);
Second_book = new book("Swtor", "Lucas", 100);
//Skapar böcker
document.write(First_book);


var table = document.createElement("table");
table.id = "table";
document.body.appendChild(table);
//Gör en ID för min table

function add_book(book,table) {
    var row = document.createElement("tr");
    add_data(row,data.title);
    add_data(row,data.author);
    add_data(row,data.price);
    table.appendChild(row);
}

//Skapar en funktion som kan lägga böckerna i tabellen

function add_data(row,data){
    var td = document.createElement("td");
    td.innerHTML = data;
    row.appendChild(td);
}

//Skapar en funktion som har en variabel där den skapar en td lista och lägger allt in ditt alltså datan
