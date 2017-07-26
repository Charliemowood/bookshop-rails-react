import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import { render } from 'react-dom'
import Main from './components/main.jsx'
import About from './components/about.jsx'
import Home from './components/home.jsx'
// import Book from './components/book.jsx'
import Container from './containers/container.jsx'

window.onload = () => {
  render (
    <HashRouter >
      <div>
        <Route path="/" component={Main} />
        <Route exact path="/" component={Home} />
        <Route path="/book" component={Container} />
        <Route path="/about" component={About} />
      </div>
    </HashRouter>,
    document.getElementById('app')
  )
}

// window.addEventListener('load', function () {
//   ReactDOM.render(
//     <Container/>,
//     document.getElementById('app')
//   );
// });
