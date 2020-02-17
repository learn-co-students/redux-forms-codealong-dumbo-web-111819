// import React, { Component } from 'react'

// class CreateTodo extends Component {
//   render() {
//     return(
//       <div>
//         Create Todo Component
//       </div>
//     )
//   }
// }

// export default CreateTodo;

// ./src/components/todos/CreateTodo.js
 
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../actions/tasks'
 
class CreateTodo extends Component {
  state={
    text:''
  }
  handleOnChange=(e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
    
  }
  handleSubmit=(e) => {
    e.preventDefault();
    console.log(this.props)
    this.props.addTodo(this.state);

    // console.log(this.props)
    
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input value={this.state.text} name='text' onChange={this.handleOnChange} type="text" />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => {
      dispatch(addTodo(todo))
    }//dispatch({ type: 'ADD_TODO', payload: formData })
  };
};
 
export default connect(null, mapDispatchToProps)(CreateTodo);
