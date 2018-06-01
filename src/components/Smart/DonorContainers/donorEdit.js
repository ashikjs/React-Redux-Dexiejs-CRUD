import React from 'react';
import DonorEdit from '../../Presentational/donorEdit';

class Donor extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.fromSubmit = this.fromSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.clear = this.clear.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    clear() {
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
        console.log('donorUpdate view',this.state)
        this.props.donorUpdate(this.state)
        e.preventDefault();
    }
    render(){
        return (
            <DonorEdit 
                onChange={this.onChange} 
                onSubmit={this.fromSubmit}
                toggle={this.props.toggle}  
                clear={this.clear}  
                modal={this.props.modal}
                state={this.state}
            />
        );
    }
}

export default Donor