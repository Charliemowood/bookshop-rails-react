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

    var names = this.state.bookNames

    // const items = this.state.bookNames.forEach((book, index) => {
    //
    //   <Book item={book} key={index}/>
    // })

    return(
      <ul>
            {names.map(function(book, index){
                return <li key={ index }>{book.title}</li>;
              })}
        </ul>
    )
  }

}

export default Container
