class Storage {
    static setData(books) {
        
        const data = books.map((book) => ({id: book.getId(), data: book.getData() }));
        console.log(data);
        localStorage.setItem('books', JSON.stringify(data));
    }

    static getData() {
        return JSON.parse(localStorage.getItem('books') ?? []);
    }


}
export default Storage;