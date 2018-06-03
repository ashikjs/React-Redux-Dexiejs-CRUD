import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';

import {donorAdd,donorDelete,donorUpdate,donorGet} from '../../../actions/index';
import DonorAdd from './donorAdd';
import DonorList from './donorList';
import DonorEdit from './donorEdit';

class Donor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          data: {}
        };
        this.toggle = this.toggle.bind(this);
        this.data = this.data.bind(this);
    }
    componentWillMount(){
        this.props.donorGet()
    }
    toggle() {
        this.setState({ modal: !this.state.modal });
    }
    data(e) {
        this.setState({ data: e });
    }

    render(){
        const {donorAdd,donorUpdate,donorDelete} = this.props
        
        return (
            <div>
                <DonorAdd 
                    donorAdd={donorAdd} 
                /> 
                <DonorList 
                    donorDelete={donorDelete} 
                    toggle={this.toggle} 
                    data={this.data} 
                />
                <DonorEdit 
                    donorUpdate={donorUpdate}  
                    toggle={this.toggle}  
                    modal={this.state.modal}
                    data={this.state.data}
                />
            </div>
        );
    }
}

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
    donorAdd: (donor) => {
        dispatch( donorAdd(donor) );
    },
    donorDelete: ( id ) => {
        dispatch( donorDelete( id ) );
    },
    donorUpdate: ( donor ) => {
        dispatch( donorUpdate( donor ) );
    },
    donorGet: () => {
        dispatch( donorGet() );
    }
});


// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(null, mapDispatchToProps)(Donor);
