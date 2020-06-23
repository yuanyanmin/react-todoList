import React from 'react'
import AppList from './AppList.js'
import AppForm from './AppForm.js'
import AppFooter from './AppFooter.js'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chooseValue: 1,
            data: this.props.data
        }
    }

    OnAddTodoItem (newItem) {
        let newData = this.state.data.concat(newItem);
        this.setState({
            data: newData
        })
    }

    ChooseValue(id) {
        this.setState({
            chooseValue: id
        })
    }

    AllChangeComplete(id) {
        let newData = this.state.data.map((item, index) => {
            if (item.id == id) {
                item.complete = !item.complete
            }
            return item;
        })
        this.setState({
            data: newData
        });
    }

    AllOnDeleteItem (id) {
        let newData = this.state.data.map((item) => {
            if (item.id == id) {
                item.deleteFlag = true
            }
            return item;
        })
        this.setState({
            data: newData
        })
    }

    render () {
        const { data } = this.state;
        return (
            <div className="ui comments">
                <h1>My TodoList with React</h1>
                <div className="ui divider"></div>
                <AppForm AddTodoItem={this.OnAddTodoItem.bind(this)}/>
                <AppList data={data}
                         chooseValue={this.state.chooseValue}
                         ChangeCompleteTop={this.AllChangeComplete.bind(this)}
                         DeleteItemTop={this.AllOnDeleteItem.bind(this)}/>
                <AppFooter SubmitChooseValue={this.ChooseValue.bind(this)}/>
            </div>
        )
    }
}

export default App;