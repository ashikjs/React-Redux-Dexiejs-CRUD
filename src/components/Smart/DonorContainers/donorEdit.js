import React from 'react';
import DonorEdit from '../../Presentational/donorEdit';

class Donor extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.fromSubmit = this.fromSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    cancel() {
        // console.log(this.state)
        this.setState({ 
            name: '',
            bloodGroup: '',
            age: '',
            weight: '',
            donateBefore: ''
         })
        this.props.toggle()
    }
    componentWillReceiveProps(e){
        this.setState(e.data )
    }
    fromSubmit(e) {
        this.props.donorUpdate(this.state)
        e.preventDefault();
        this.props.toggle()
    }
    render(){
        return (
            <DonorEdit 
                onChange={this.onChange} 
                onSubmit={this.fromSubmit}
                toggle={this.props.toggle}  
                cancel={this.cancel}  
                modal={this.props.modal}
                state={this.state}
            />
        );
    }
}

export default Donor