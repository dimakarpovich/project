import Storage from "./Storage";
import Book from "./Book";
class Table {
    #books =[];

    update() {
        this.node.innerHTML ='';
        this.#books.forEach(({node})=> this.node.append(node));
        Storage.setData(this.#books);
    }

    addBook(book) {
        this.#books.unshift(book);
        book.btnDelite.addEventListener('click' , ()=> this.removeBook(book.getId()));
        this.update();
       
    }
    removeBook(id) {
        this.#books = this.#books.filter((book) => book.getId() !==id);
        this.update();

    }
    create() {
        const books = Storage.getData();
    
        books.reverse().map(({ id, data }) => {
          const book = new Book(id, data);
          this.addBook(book);
        });
      }


    constructor(){
        this.node = document.getElementById('table');
        this.create();
    }
}

export default Table;