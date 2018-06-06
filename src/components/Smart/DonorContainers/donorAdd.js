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
            donateBefore: '',
            nameValid: false,
            bloodGroupValid: false,
        };
        this.fromSubmit = this.fromSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
      
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        this.showInputError(e.target)
    }
  
    fromSubmit(e) {
        this.props.donorAdd(this.state)
        e.preventDefault();
        e.target.reset();
        this.setState({})
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
            <DonorAddForm 
                onChange={this.onChange} 
                onSubmit={this.fromSubmit}
                formIsValid={formIsValid}
            />
        );
    }
}

export default Donor