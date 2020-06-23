import React from 'react'

class TodoItem extends React.Component {
    // 父组件通过属性的形式向子组件传递参数
    // 子组件通过props接受父组件传递过来的参数

    // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法

    constructor (props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        const { index, deleteFun } = this.props;
        deleteFun(index)
        // this.props.deleteFun(this.props.index)
    }
    render () {
        const { content } = this.props;
        return (
            <li onClick={this.handleDelete}>{content}</li>
        )
    }
}

export default TodoItem