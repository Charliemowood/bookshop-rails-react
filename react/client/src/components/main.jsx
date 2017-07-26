import React from 'react'
import Book from './book.jsx'
import {Link} from 'react-router-dom'

class Main extends React.Component {
  constructor(props){
    super(props);
    // provide a model for the data
    this.state = {
      bookNames: [{img:null, title:null, price:null, stock:null, status:null, author: {name:null}}]

    };

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

    return(
      <div>

        <ul className="nav">
         <li className="topnav"><Link to="/" className="white">Home</Link></li>
         <li className="topnav"><Link to="/about" className="white">About</Link></li>
         <li className="topnav"><Link to="/book" className="white">Book List</Link></li>
       </ul>
      </div>
    )
  }

}

export default Main
