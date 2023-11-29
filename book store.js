function CreateAuthor(name,birthyear,nationality){
    this.name = name;
    this.birthyear = birthyear;
    this.nationality = nationality;
}

    function Book(title,author,genre,price){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
}
Book.prototype.getBookInfo = function(title,author,genre,price){
    return title,author,genre,price
}
let aut1 = new Author("Nitika",2020,"Indian")
let aut2 = new Author("Niti",2021,"Indian")
let aut3 = new Author("Nikita",2022,"Indian")

let book1 = new Book("the mind",aut1,"hii",280)
let book2 = new Book("the theaf",aut1,"hey",580)
let book3 = new Book("the women",aut1,"hiiii",600)


book1.getBookInfo()
book2.getBookInfo()
console.log(book1,book2,book3)