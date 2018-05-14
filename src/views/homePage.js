import React from 'react';
import DonarAdd from "../components/presentational/donarAdd"
import DonarList from "../components/presentational/donarList"
import Users from "../components/userlist"
import db from "../db"

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = { todos: [] };
        this.donarAdd = this.donarAdd.bind(this);
        // this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        // this.handleToggleTodo = this.handleToggleTodo.bind(this);
      }
    
  
    
  // onChange(e) {
  //     this.setState({ [e.target.name]: e.target.value })
  // }

    componentDidMount(){
        db.donars.add({}).then (function(){
            //
            // Then when data is stored, read from it
            //
            return db.donars
        })
        // .then(function (friend) {
        //     //
        //     // Display the result
        //     //
        //     alert ("Nicolas has shoe size " + friend.shoeSize);
        // }).catch(function(error) {
        //    //
        //    // Finally don't forget to catch any error
        //    // that could have happened anywhere in the
        //    // code blocks above.
        //    //
        //    alert ("Ooops: " + error);
        // });
    }
    donarAdd(e) {
        console.log('donar details',e.donar)
        db.donars.add(e.donar).then (function(e){
            //
            // Then when data is stored, read from it
            //
            // console.log(e.donars)
        })
      }
    render() {
        return (
            <div>
                {/* <Users /> */}
                <DonarAdd donarAdd={this.donarAdd} />
                <hr />
                <DonarList />


            </div>
        );
    }
}
