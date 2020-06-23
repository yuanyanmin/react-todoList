import React, { Fragment } from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        'learn react',
        'learn english'
      ]
    }

    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }
  handleBtnClick () {
    let value = this.inputText.value
    this.setState({
      list: [...this.state.list, value]
    })
    this.inputText.value = ''
  }
  handleItemClick (index) {
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    })
  }
  handleDelete (index) {
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    })
  }
  getTodoItems () {
    return (
      this.state.list.map((item, index) => {
        // return <li key={index}
        //            onClick={this.handleItemClick.bind(this, index)}>{item}</li>
        return <TodoItem key={index}
                    content={item}
                    index={index}
                    deleteFun={this.handleDelete}/>
      })
    )
  }
  render () {
    return (
      <Fragment>
        <div>
          <input ref={(inputText) => {this.inputText = inputText}}/>
          {/* <button onClick={this.handleBtnClick.bind(this)}>add</button> */}
          {/* 在 constructor 中绑定了this, 则再次函数不需要绑定this */}
          <button className="red-btn" onClick={this.handleBtnClick}>add</button>

        </div>
        <ul>
          { this.getTodoItems() }
        </ul>
      </Fragment>
    );
  }
 
}

export default TodoList;
