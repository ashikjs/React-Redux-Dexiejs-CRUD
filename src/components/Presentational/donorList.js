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
          currentPage: 1,
          perPage: 5
        };
        this.handlePage = this.handlePage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    handlePage(e){
        this.setState({currentPage: e})
    }

    previousPage(){
        1 < this.state.currentPage ? this.setState({currentPage: this.state.currentPage - 1}) : ''
    }

    nextPage(){
        this.setState({currentPage: this.state.currentPage + 1})
    }
    edit(donor) {
        this.props.data(donor);
        this.props.toggle()
    }
    
    renderList() {
        const { currentPage, perPage } = this.state;
        const indexOfLastDonor = currentPage * perPage;
        const indexOfFirstDonor = indexOfLastDonor - perPage;
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
        const currentPageDonors = donors.slice(indexOfFirstDonor, indexOfLastDonor);
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
            <h2 class="text-center" >All Donare List</h2>
            <Table hover >
                <thead>
                <tr>
                    <th>SL </th>
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
           <Pagination
                handlePage={this.handlePage}
                totalData={this.props.donors.length}
                perPage={this.state.perPage}
                currentPage={this.state.currentPage}
                previousPage={this.previousPage}
                nextPage={this.nextPage}
            />
           
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