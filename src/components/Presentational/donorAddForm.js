import React from 'react';
import PropTypes from 'prop-types';

import { Form,FormGroup,Label,Input,Button } from 'reactstrap';

const DonorAddForm = ({name,bloodGroup,weight,age,donateBefore,onChange,onSubmit,formIsValid}) => 
    <div>
        <br/>
        <h2 class="text-center">Add a Donare</h2>
        <br/>
        <Form inline onSubmit={formIsValid ? onSubmit : null} action="javascript:">
            <FormGroup class="mb-4 mr-sm-4 mb-sm-2">
                <Label for="name" class="mr-sm-2">Name</Label>
                <Input 
                    type="text"
                    onChange={onChange}
                    name="name"
                    placeholder="Type ur name"
                    value={name}/>
            </FormGroup>
            <FormGroup class="mb-4 mr-sm-4 mb-sm-2">
                <Label class="mr-sm-2">Blood Group</Label>
                <Input type="select" name="bloodGroup" value={bloodGroup} onChange={onChange}>
                    <option value=""></option>
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
                <Input type="select" name="age" value={age} onChange={onChange}>
                    <option value=""></option>
                    <option value="18-">18-</option>
                    <option value="18+">18+</option>
                    <option value="50+">50+</option>
                </Input>
            </FormGroup>
            <FormGroup class="mb-4 mr-sm-4 mb-sm-2">
                <Label class="mr-sm-2">Weight</Label>
                <Input type="select" name="weight" value={weight} onChange={onChange}>
                    <option value=""></option>
                    <option value="50-">50-</option>
                    <option value="50+">50+</option>
                </Input>
            </FormGroup>
            <FormGroup class="mb-4 mr-sm-4 mb-sm-2">
                <Label class="mr-sm-2">Previously Gave blood</Label>
                <Input type="select" name="donateBefore" value={donateBefore} onChange={onChange}>
                    <option value=""></option>
                    <option value="0">NO</option>
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
            <Button class="marginLeft15 mb-sm-2" type="submit" disabled={!formIsValid}>ADD</Button>
        </Form>
    </div>
;

DonorAddForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default DonorAddForm;