import React from 'react';
import { Link } from "react-router-dom";

import { Table } from 'reactstrap';
import {connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
class DonarList extends React.Component {
        
    renderList() {
        if (this.props.donares.length == 0) {
            return (
                <tr>
                    <td scope="row">1</td>
                    <td>Please add some donares.........<FontAwesomeIcon icon="users" /></td>
                </tr>
            );
        }
        return this.props.donares.map((donare) => {
            return (
                <tr key={donare.id}>
                    <td scope="row">{donare.id}</td>
                    <td>{donare.name}</td>
                    <td>{donare.bloodGroup}</td>
                    <td>{donare.age}</td>
                    <td>{donare.weight}</td>
                    <td>{donare.donateBefore}</td>
                    <td> <Link to="/"><FontAwesomeIcon icon="user-edit" /></Link> | <Link to="/"><FontAwesomeIcon icon="trash-alt" /></Link> </td>
                </tr>                    
            );
        });
    }

    render() {
      // next task view 


      
    console.log('Donares List',this.props.donares)
    return (
       
        <div> 
            <h2 class="text-center">All Donare List</h2>
            <br/>
            <Table hover >
                <thead>
                <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Blood Group</th>
                    <th>Age</th>
                    <th>Weight</th>
                    <th>Previously gave blood</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderList()}
                </tbody>
            </Table>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        donares: state.donare.donars
    };
}

export default connect(mapStateToProps)(DonarList);