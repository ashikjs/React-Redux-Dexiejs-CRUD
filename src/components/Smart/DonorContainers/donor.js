import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';

import {donorAdd,donorDelete} from '../../../actions/index';
import DonorAdd from './donorAdd';
import DonorList from '../../Presentational/donorList';
import DonorEdit from './donorEdit';

// class Donor extends React.Component {
//     render(){
//         return (
//             <DonorAdd addDonare={this.props.addDonare} />, 
//             <DonorList donorDelete={donorDelete} />
//         );
//     }
// }
const Donor = ({donorAdd, donorDelete,data}) =>
    <div>
        <DonorAdd donorAdd={donorAdd} /> 
        <DonorList donorDelete={donorDelete} editDonor={data} />
        <DonorEdit 
                // toggle={this.toggle}  
                // modal={this.state.modal}
                data={data}
        />
    </div>

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        // users: state.users
    };
}

// function matchDispatchToProps(dispatch){
//     return  bindActionCreators({addDonare: addDonare}, dispatch)
// }
const mapDispatchToProps = ( dispatch ) => ({
    donorAdd: (donort) => {
        dispatch( donorAdd(donort) );
    },
    donorDelete: ( id ) => {
        dispatch( donorDelete( id ) );
    }
});


// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(null, mapDispatchToProps)(Donor);
