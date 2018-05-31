import React from 'react';
import DonorEdit from '../../Presentational/donorEdit';

class Donor extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            bloodGroup: '',
            age: '',
            weight: '',
            donateBefore: '',
            modal: true
        };
        this.toggle = this.toggle.bind(this);
        this.fromSubmit = this.fromSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
      }
         toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    fromSubmit(e) {
        // console.log('first view',this.state)
        this.props.donorAdd(this.state)
        e.preventDefault();
    }
    render(){
        return (
            <DonorEdit 
                onChange={this.onChange} 
                onSubmit={this.fromSubmit}
                toggle={this.props.toggle}  
                modal={this.props.modal}
            />
        );
    }
}

export default Donor