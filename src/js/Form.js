class Form {
    clear(){
       this.node[0].value= '' ;
       this.node[1].value = '';
       this.node[2].value = '';
       this.node.elements["status"].value ;
    }
    getData(){
        const title = this.node[0].value;
        if(title.length >11){
          this.title = `${title.substring(0, 10)}...`;
        } if(!title) {
            throw new Error("Enter the title of the book!");
        }
        return { title: this.node[0].value ,
                author: this.node[1].value, 
                genre: this.node[2].value,
                condition: this.node.elements["status"].value,         
        };

        
        
    }
    constructor(){
        this.node = document.getElementById('form');
    }
    

}

export default Form;