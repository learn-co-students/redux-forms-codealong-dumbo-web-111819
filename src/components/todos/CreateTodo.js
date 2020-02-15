import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {
  state = {
    todo:'',
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.addTodo(this.state)
  }
  render() {
    
    
    return(
      <div>
        <form onSubmit ={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" name='todo' value = {this.state.todo} onChange = {this.handleOnChange}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo)=> dispatch({type: 'ADD_TODO', todo })
  }
}


export default connect(null, mapDispatchToProps)(CreateTodo);
