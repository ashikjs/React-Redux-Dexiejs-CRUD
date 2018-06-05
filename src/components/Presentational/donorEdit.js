import React from 'react';
import PropTypes from 'prop-types';

import { Form,FormGroup,Label,Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

    const ModalExample = ({toggle,modal,cancel,onChange,onSubmit,state}) => 

        <div>
          <Modal isOpen={modal}>
            <ModalHeader>Donare Edit</ModalHeader>
            <Form onSubmit={onSubmit} action="javascript:">
                <ModalBody>
                    <FormGroup class=" mb-sm-2">
                        <Label for="name" class="mr-sm-2">Name</Label>
                        <Input 
                            type="text"
                            onChange={onChange}
                            name="name"
                            placeholder="Type ur name"
                            value={state.name} />
                    </FormGroup>
                    <FormGroup class="row mb-sm-2">
                    <div class="col-sm">
                        <Label class="mr-sm-2">Blood Group</Label>
                        <Input type="select" name="bloodGroup" value={state.bloodGroup } onChange={onChange}>
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
                    </div>
                    <div class="col-sm">
                        <Label class="mr-sm-2">Age</Label>
                        <Input type="select" name="age" value={state.age} onChange={onChange}>
                            <option value=""></option>
                            <option value="18-">18-</option>
                            <option value="18+">18+</option>
                            <option value="50+">50+</option>
                        </Input>
                    </div>
                    </FormGroup>
                    <FormGroup class="row mb-sm-2">
                        <div class="col-sm">
                            <Label class="mr-sm-2">Weight</Label>
                            <Input type="select" name="weight" value={state.weight} onChange={onChange}>
                                <option value=""></option>
                                <option value="50-">50-</option>
                                <option value="50+">50+</option>
                            </Input>
                        </div>
                        <div class="col-sm">
                            <Label class="mr-sm-2">Previously gave blood</Label>
                            <Input type="select" name="donateBefore" value={state.donateBefore} onChange={onChange}>
                                <option value=""></option>
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
                        </div>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" type="submit">Update</Button>
                    <Button color="secondary" type="button" onClick={cancel}>Cancel</Button>
                </ModalFooter>
            </Form>
          </Modal>
        </div>
    ;
  
    ModalExample.propTypes = {
        modal: PropTypes.bool.isRequired,
        state: PropTypes.object.isRequired,
        cancel: PropTypes.func.isRequired,
        toggle: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired
    };
    
    export default ModalExample;