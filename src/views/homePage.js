import React from 'react';
import DonarAdd from "../components/presentational/donarAdd"
import DonarList from "../components/presentational/donarList"
import Users from "../components/userlist"
import db from "../db"

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = { todos: [] };
        // this.handleAddTodo = this.handleAddTodo.bind(this);
        // this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        // this.handleToggleTodo = this.handleToggleTodo.bind(this);
      }
    
  
    
  // onChange(e) {
  //     this.setState({ [e.target.name]: e.target.value })
  // }
    componentDidMount(){
        console.log('start db');
        db.table('players')
        .toArray()
        .then((todos) => {
          this.setState({ todos });
        });
    }
    // handleAddTodo(title) {
    //     const todo = {
    //       title,
    //       done: false,
    //     };
    //     db.table('todos')
    //       .add(todo)
    //       .then((id) => {
    //         const newList = [...this.state.todos, Object.assign({}, todo, { id })];
    //         this.setState({ todos: newList });
    //       });
    //   }
    render() {
        return (
            <div>
                {/* <Users /> */}
                <DonarAdd handleAddTodo={this.handleAddTodo} />
                ***********
                <hr />
                <DonarList />


            </div>
        );
    }
}
