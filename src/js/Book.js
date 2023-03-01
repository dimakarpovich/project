class Book {
    #data = {};
    #id = null;
    setData(data) {
        this.#data = data;
    }

    getData() {
        return this.#data; 
    }
    
    getId() {
        return this.#id;
    }
    
    createBtn(isDelete){
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('btn');
        button.classList.add(`btn-${isDelete ? 'danger' : 'info'}`);
        button.innerText = isDelete ?  'delite' : 'edit';
        return button; 


    }
    createNode() {
        const { title, author, genre, condition} = this.getData();
        const tr = document.createElement('tr');
        const html = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${genre}</td>
        <td>${condition}</td>
        <td>
          <div class="btn-group">
          </div>
        </td>
        `;
       
        tr.insertAdjacentHTML('beforeend',html);
        const btnGroup = tr.querySelector('.btn-group');
        const btnDelite = this.createBtn(true);
        const btnEdit = this.createBtn(false);
        btnGroup.append(btnDelite, btnEdit);
        this.node = tr;
        this.btnDelite = btnDelite;
        this.btnEdit = btnEdit;

    }
    constructor (id, data) {
        this.#id  = id;
        this.setData(data);
        this.createNode();
        
    }

}

export default Book;