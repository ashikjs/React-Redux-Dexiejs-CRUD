import React from 'react';
import { Form,FormGroup,Label,Input,Button } from 'reactstrap';

export default class User extends React.Component {
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
        console.log(this.state)
        e.preventDefault();
      }
    render(){
        return (
            <div>
                <br/>
                <h2 class="text-center">Add a Donare</h2>
                <br/>

                <Form inline  onSubmit={this.fromSubmit} action="javascript:">
                    <FormGroup class="mb-4 mr-sm-4 mb-sm-2">
                        <Label for="name" class="mr-sm-2">Name</Label>
                        <Input 
                            type="text"
                            onChange={this.onChange}
                            name="name"
                            placeholder="Type ur name"
                            value={this.state.name} />
                    </FormGroup>
                    <FormGroup class="mb-4 mr-sm-4 mb-sm-2">
                        <Label class="mr-sm-2">Blood Group</Label>
                        <Input type="select" name="bloodGroup" value={this.state.bloodGroup} onChange={this.onChange}>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </Input>
                    </FormGroup>
                    <FormGroup class="mb-4 mr-sm-4 mb-sm-2">
                        <Label class="mr-sm-2">Age</Label>
                        <Input type="select" name="age" value={this.state.age} onChange={this.onChange}>
                            <option value="18-">18-</option>
                            <option value="18+">18+</option>
                            <option value="50+">50+</option>
                        </Input>
                    </FormGroup>
                    <FormGroup class="mb-4 mr-sm-4 mb-sm-2">
                        <Label class="mr-sm-2">Weight</Label>
                        <Input type="select" name="weight" value={this.state.weight} onChange={this.onChange}>
                            <option value="50-">50-</option>
                            <option value="50+">50+</option>
                        </Input>
                    </FormGroup>
                    <FormGroup class="mb-4 mr-sm-4 mb-sm-2">
                        <Label class="mr-sm-2">Previously gave blood</Label>
                        <Input type="select" name="donateBefore" value={this.state.donateBefore} onChange={this.onChange}>
                            <option value="NO">NO</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="10+">10+</option>
                        </Input>
                    </FormGroup>
                        <Button class="marginLeft15 mb-sm-2" type="submit" >ADD</Button>
                        
                </Form>
            </div>
        );
    }
}