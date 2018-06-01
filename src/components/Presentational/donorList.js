import React from 'react';
import { Link } from "react-router-dom";
import { Table,Button } from 'reactstrap';
import {connect } from 'react-redux';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class DonorList extends React.Component {

    edit(donor) {
        this.props.data(donor);
        this.props.toggle()
    }
    
    renderList() {
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
        return donors.map((donor, i) => {
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
        donors: state.donor.donors
    };
}

export default connect(mapStateToProps)(DonorList);