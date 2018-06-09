import React from 'react';
import { connect } from 'react-redux';
import Pagination from '../pagination'
import DonarListView from '../../Presentational/donorList'
import DeleteCofirm from '../deleteConfirm'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class DonorList extends React.Component {
    constructor() {
        super();
        this.state = {
          currentPage: 1,
          perPage: 5,
          modal: false,
          DModal: false,
          DonareDeleteId: null,
          DonareDeleteDetails: {},
        };
        this.donorEdit = this.donorEdit.bind(this);
        this.donorDelete = this.donorDelete.bind(this);
        this.toggle = this.toggle.bind(this);
        this.DToggle = this.DToggle.bind(this);
        this.DConfirm = this.DConfirm.bind(this);
        this.handlePage = this.handlePage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    donorEdit(donor) {
        this.props.data(donor);
        this.props.toggle()
    }
    
    donorDelete(donor) {
        this.setState({
            DonareDeleteId: donor.id,
            DonareDeleteDetails: { 
                name: donor.name ,
                bloodGroup: donor.bloodGroup
            }
        });
        this.DToggle()
    }
    DConfirm() {
        const id = this.state.DonareDeleteId
        this.props.donorDelete(id);
        this.DToggle()
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    DToggle() {
        this.setState({
            DModal: !this.state.DModal
        });
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
                    donorDelete={this.donorDelete}
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
                <DeleteCofirm 
                    DModal ={this.state.DModal}
                    DToggle ={this.DToggle}
                    DConfirm ={this.DConfirm}
                    DDeatils ={this.state.DonareDeleteDetails}
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