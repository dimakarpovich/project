import Alert from './Alert';
import Form from './Form';
import Book from './Book';
import Table from './Table';



document.addEventListener('DOMContentLoaded' , () => {
   const form = new Form();
   const alert = new Alert();
   const table = new Table();

   
   
   const onAdd = () => {
      try {
         const data = form.getData();
         const book = new Book( Date.now(),data);
        

         form.clear();
         table.addBook(book);
         alert.showAlert('The book has been aded successfully!');

      } catch ({message}) {
        alert.showAlert(message, true);

      }

   }
   
   form.node.addEventListener('submit',(e) => {
      e.preventDefault();
      onAdd();
      

      
   });
   
   

});