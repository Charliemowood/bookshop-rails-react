import React from 'react'
import { Dropdown } from '../components/dropdown.jsx'
import Book from '../components/book.jsx'

class Container extends React.Component {
  constructor(props){
    super(props);
    // provide a model for the data
    this.state = {
      bookNames: [{img:null, title:null, price:null, stock:null, status:null}]

      // focusName: null
    };
    // State: countries, currentCountry
  }


    componentDidMount() {
      const url = "http://localhost:5000/api/books";
      const request = new XMLHttpRequest();
      request.open("GET", url);

      request.onload = () => {
        if (request.status !== 200) return

        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);

        this.setState({ bookNames: data})
      }

      request.send();
    }



  render() {


    //why does li key thing have to be next to the return to work
    var names = this.state.bookNames
    var namesList = names.map(function(book, index) {
          return (
          <li key={ index }>
            <p>Title: {book.title}</p>
            <p>Price: ${book.price}</p>
            <p>Stock: {book.stock}</p>
            <p>Warning Level: {book.status}</p>
          </li>

         )})
    return(
      <ul>
         {namesList}
        </ul>
    )
  }

}

export default Container
