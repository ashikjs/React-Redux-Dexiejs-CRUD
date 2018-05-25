import React from 'react';
import DonareAddForm from '../../Presentational/donareAddForm';

class Donare extends React.Component {
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
        console.log('first view',this.state)
        this.props.addDonare(this.state)
        e.preventDefault();
    }
    render(){
        return (
            <DonareAddForm 
                onChange={this.onChange} 
                onSubmit={this.fromSubmit}
            />
        );
    }
}

export default Donare