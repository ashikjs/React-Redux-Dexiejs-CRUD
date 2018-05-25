import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addDonare} from '../../../actions/index';
import DonareAdd from './donarAdd';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';

// class Donare extends React.Component {
//     render(){
//         return (
//             <DonareAdd addDonare={this.props.addDonare} /> 
//         );
//     }
// }

const Donare = ({addDonare}) => 
    <DonareAdd addDonare={addDonare}/> 


// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        // users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({addDonare: addDonare}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Donare);
