import React from 'react';
import DonorAddForm from '../../Presentational/donorAddForm';

class Donor extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            bloodGroup: '',
            age: '',
            weight: '',
            donateBefore: ''
        };
        this.fromSubmit = this.fromSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
      }
         
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    fromSubmit(e) {
        this.props.donorAdd(this.state)
        e.preventDefault();
        e.target.reset();
        this.setState({})
    }
    render(){
        return (
            <DonorAddForm 
                onChange={this.onChange} 
                onSubmit={this.fromSubmit}
            />
        );
    }
}

export default Donor