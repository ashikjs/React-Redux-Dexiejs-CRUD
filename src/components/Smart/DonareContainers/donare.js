import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {donorAdd,donorDelete} from '../../../actions/index';
import DonorAdd from './donarAdd';
import DonorList from '../../Presentational/donarList';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';

const Donor = ({donorAdd, donorDelete}) =>
    <div>
        <DonorAdd donorAdd={donorAdd} /> 
        <DonorList donorDelete={donorDelete} />
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
    donorAdd: ( donor ) => {
        dispatch( donorAdd( {donor} ) );
    },
    donorDelete: ( id ) => {
        dispatch( donorDelete( id ) );
    }
});


// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(null, mapDispatchToProps)(Donor);
