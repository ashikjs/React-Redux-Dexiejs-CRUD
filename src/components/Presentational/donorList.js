import React from 'react';
import { Link } from "react-router-dom";
import { Table,Button } from 'reactstrap';
import { connect } from 'react-redux';
import Pagination from '../Smart/pagination'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class DonorList extends React.Component {
    constructor() {
        super();
        this.state = {
          todos: ['a','b','c','d','e','f','g','h','i','j','k'],
          currentPage: 1,
          todosPerPage: 5
        };
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    edit(donor) {
        this.props.data(donor);
        this.props.toggle()
    }
    
    renderList() {
        const { todos, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const {donors, donorDelete} = this.props;
        // if (donors) { 
        if (donors.length == 0) {
            return (
                <tr>
                    <td scope="row">1</td>
                    <td>Please add some donors.........</td>
                </tr>
            );
        };
        const currentPageDonors = donors.slice(indexOfFirstTodo, indexOfLastTodo);
      
        return currentPageDonors.map((donor, i) => {
            return (
                <tr key={donor.id}>
                    <td scope="row">{i+1}</td>
                    <td>{donor.name}</td>
                    <td>{donor.bloodGroup}</td>
                    <td>{donor.age}</td>
                    <td>{donor.weight}</td>
                    <td>{donor.donateBefore}</td>
                    <td>
                        <FontAwesomeIcon 
                            icon="user-edit" 
                            onClick={this.edit.bind(this, donor)} 
                        />|
                        <FontAwesomeIcon 
                            icon="trash-alt" 
                            onClick={() => donorDelete(donor.id)}
                        />
                    </td>
                </tr>                    
            );
        });
    }

    render() {
        
    return (
        
        <div> 
            <br/>
            <br/>
            <br/>
            <h2 class="text-center">All Donare List</h2>
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
            <hr/>
           <Pagination />
           
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        donors: state.donor.donors
    };
}

export default connect(mapStateToProps)(DonorList);