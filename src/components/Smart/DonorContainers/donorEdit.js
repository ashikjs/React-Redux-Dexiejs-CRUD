import React from 'react';
import DonorEdit from '../../Presentational/donorEdit';

class Donor extends React.Component {
    constructor() {
        super();
        this.state = {
            nameValid: false,
            bloodGroupValid: false,
        };

        this.fromSubmit = this.fromSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        this.showInputError(e.target)
    }
    cancel() {
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
    showInputError(target) {
        const value = target.value
        if(target.name == 'name'){
            const regex = /^[a-zA-Z]+(?:[_ -]?[a-zA-Z])+\s*$/gm;
           if(!value || value.trim() =='' || !regex.test(value) || value.length > 30){
               target.classList.add('error')
               this.setState({nameValid: false})
               return false;
            } 
            target.classList.remove('error')
            this.setState({nameValid: true})
            return true
        }
        if (target.name == 'bloodGroup'){
            if(!value || value.trim() =='' || value.length > 3){
                target.classList.add('error')
                this.setState({bloodGroupValid: false})
                return false;
            }
            target.classList.remove('error')
            this.setState({bloodGroupValid: true})
            return true
        }
        return false;
    }
    render(){
        const {nameValid,bloodGroupValid} = this.state
        let formIsValid = false
        nameValid && bloodGroupValid ? formIsValid = true : formIsValid = false
        return (
            <DonorEdit 
                onChange={this.onChange} 
                onSubmit={this.fromSubmit}
                toggle={this.props.toggle}  
                cancel={this.cancel}  
                modal={this.props.modal}
                state={this.state}
                formIsValid={formIsValid}
            />
        );
    }
}

export default Donor