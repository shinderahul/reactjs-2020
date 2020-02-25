import React, { Component } from 'react';
import uuid, { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class App extends Component {

  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false
  }
  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editItem: false
    })
  }
  clearList = () => {
    console.log("Clear list");
  }
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  }
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
             />
            <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              clearList={this.clearList}
            />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
