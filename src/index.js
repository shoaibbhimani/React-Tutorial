import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery'

class Fetch extends React.Component {
  constructor(){
    super()
    this.state = {
      content:[]
    }
  }
  componentDidMount(){
    $.ajax({
      url:this.props.url,
      success:(data) => {
        this.setState({
          content:data
        })
      },
      error:(err) => {
        console.log("err", err)
      }
    })
  }
  render(){
    return (
      <section>
         {this.props.children(this.state.content)} 
      </section>
    )
  }
}

Fetch.propTypes = {
  url:React.PropTypes.string.isRequired
}

class App extends React.Component {
  render(){
    return (
      <section>
         <Fetch url="https://jsonplaceholder.typicode.com/posts">
           {(data) => {
              return data.map((value, index) => {
                return <li key={index}>{value.title}</li>
              })
           }}
         </Fetch>
          User
         <Fetch url="https://jsonplaceholder.typicode.com/users">
           {(data) => {
              return data.map((value, index) => {
                return <li key={index}>{value.name}</li>
              })
           }}
         </Fetch>
      </section>
    )
  }
}
ReactDOM.render(<App />,document.getElementById('root'))

