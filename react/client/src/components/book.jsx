import React from 'react'


class Book extends React.Component {

   render(props) {
     var names = this.props.bookList
     var namesList = names.map(function(book, index) {

           return (

           <li key={ index } className="bordered">
             <p>Title: {book.title}</p>
             <p>Author: {book.author.name}</p>
             <p>Price: ${book.price}</p>
             <p>Stock: {book.stock}</p>
             <p>Warning Level: {book.status}</p>
             <button type="button">Delete Book</button>
           </li>

          )})

   return (
      <div>
        {namesList}
      </div>

  )
 }

}

export default Book
