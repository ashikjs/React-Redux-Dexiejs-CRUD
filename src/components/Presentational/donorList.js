import React from 'react';
import { Table } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

class DonorList extends React.Component {
    renderList() {
        const { donorEdit,donorDelete,currentPageDonors } = this.props;
        if (currentPageDonors.length == 0) {
            return (
                <tr>
                    <td scope="row">1</td>
                    <td>Please add some donors.........</td>
                </tr>
            );
        };
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
                            onClick={ ()=> donorEdit(donor)} 
                        />|
                        <FontAwesomeIcon 
                            icon="trash-alt" 
                            onClick={ () => donorDelete(donor.id)}
                        />
                    </td>
                </tr>                    
            );
        });
    }

    render() {
        return (
            <div> 
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
            </div>
        );
    }
}

DonorList.propTypes = {
    donorEdit: PropTypes.func,
    donorDelete: PropTypes.func,
    currentPageDonors: PropTypes.array
}
  
export default DonorList;