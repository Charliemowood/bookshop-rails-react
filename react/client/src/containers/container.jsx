import React from 'react'
import { Dropdown } from '../components/dropdown.jsx'

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bookNames: [{title:null}],
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

// why does this render twice?
console.log(this.state.bookNames[0])
    return(
      // why can I not console log in here?
      // <Dropdown/>
      <div>
     <h1>{this.state.bookNames[0].title}</h1>
     </div>
    )
  }

}

export default Container
