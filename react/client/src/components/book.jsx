import React from 'react'


class Book extends React.Component {

   render(props) {
     console.log(props)
   return (
      <div>
        <p>Title: this.props.title</p>
        <p>Price: this.props.price</p>
      </div>

  )
 }

}

export default Book
