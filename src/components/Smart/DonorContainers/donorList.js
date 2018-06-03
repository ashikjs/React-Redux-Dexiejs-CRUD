import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../pagination'
import DonarListView from '../../Presentational/donorList'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class DonorList extends React.Component {
    constructor() {
        super();
        this.state = {
          currentPage: 1,
          perPage: 5
        };
        this.donorEdit = this.donorEdit.bind(this);
        this.handlePage = this.handlePage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    donorEdit(donor) {
        this.props.data(donor);
        this.props.toggle()
    }
    
    handlePage(e){
        this.setState({currentPage: e})
    }

    previousPage(){
        this.setState({currentPage: this.state.currentPage - 1})
    }

    nextPage(){
        this.setState({currentPage: this.state.currentPage + 1})
    }
    render() {
        const { currentPage, perPage } = this.state;
        const indexOfLastDonor = currentPage * perPage;
        const indexOfFirstDonor = indexOfLastDonor - perPage;
        const currentPageDonors = this.props.donors.slice(indexOfFirstDonor, indexOfLastDonor);
        return (
            
            <div> 
                <br/>
                <br/>
                <h2 class="text-center" >All Donare List</h2>
                <DonarListView
                    donorDelete={this.props.donorDelete}
                    donorEdit={this.donorEdit}
                    currentPageDonors={currentPageDonors}
                />
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