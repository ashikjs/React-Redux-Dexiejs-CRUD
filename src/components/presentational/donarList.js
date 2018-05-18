import React from 'react';
import { Table } from 'reactstrap';
import {connect} from 'react-redux';
class DonarList extends React.Component {
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
                <tr>
                    <th scope="row">1</th>
                    <td>Md Ashik</td>
                    <td>AB+</td>
                    <td>26</td>
                    <td>51</td>
                    <td>1</td>
                    <td>@|$</td>
                </tr>
                
                </tbody>
            </Table>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        donares: state.donare
    };
}

export default connect(mapStateToProps)(DonarList);