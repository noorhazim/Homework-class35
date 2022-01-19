//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {

    const book = document.createElement('ul');
    const bookImages = document.createElement('array');
    bookImages[0] = 'https://media.s-bol.com/7ov383lj3Rr/800x1200.jpg';
    bookImages[1] = 'data:image/jpeg;base64,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';
    bookImages[2] = 'https://images-na.ssl-images-amazon.com/images/I/41HXiIojloL._SX396_BO1,204,203,200_.jpg';
    const backgrounds = ["red", "orange", "pink"]

    books.forEach(item => {
        const bookEl = document.createElement('p');
        bookEl.textContent = item.title + '-' + item.author;
        const img = document.createElement('img');
        const i = books.indexOf(item);
        img.src = bookImages[i];
        img.alt = "bookimage number" + bookImages[i];
        img.style.width = 150 + "px";
        const li = document.createElement("li");
        li.appendChild(bookEl);
        li.appendChild(img);
        book.appendChild(li);
        li.style.background = backgrounds[i];
        li.style.paddingLeft = 10 + "px";
        li.style.padding = 5 + "px";
        li.style.margin = 50 + "px";
        book.style.listStyle = "none";
        book.style.display = "flex";
    });
    return book;
}

function main() {
    const myBooks = [{
            title: 'The Design of Everyday Things',
            author: 'Don Norman',
            isbn: '978-0465050659',
            alreadyRead: false,
        },
        {
            title: 'The Most Human Human',
            author: 'Brian Christian',
            isbn: '978-1617933431',
            alreadyRead: true,
        },
        {
            title: 'The Pragmatic Programmer',
            author: 'Andrew Hunt',
            isbn: '978-0201616224',
            alreadyRead: true,
        },
    ];


    console.log(createBookList(myBooks));
    const ulElement = createBookList(myBooks);
    document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);