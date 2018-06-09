import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

  const DeleteConfirm = ({DModal,DToggle,DConfirm,DDeatils}) => 
    <div>
      <Modal isOpen={DModal} toggle={DToggle}>
        <ModalHeader toggle={DToggle}>Delete This</ModalHeader>
        <ModalBody>
          Do you want to delete donor <strong>{DDeatils.name}</strong> which blood group <strong>{DDeatils.bloodGroup}</strong> ?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={DConfirm}>Confirm</Button>
          <Button color="secondary" onClick={DToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>

DeleteConfirm.propTypes = {
  DModal: PropTypes.bool.isRequired,
  DDeatils: PropTypes.object.isRequired,
  DToggle: PropTypes.func.isRequired,
  DConfirm: PropTypes.func.isRequired,
};

export default DeleteConfirm;