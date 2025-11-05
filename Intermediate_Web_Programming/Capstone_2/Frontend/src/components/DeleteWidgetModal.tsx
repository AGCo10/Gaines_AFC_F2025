import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Button, Form} from "react-bootstrap";

import {useState} from "react";
import {deleteWidget} from "../util/WidgetClient.ts";
import type {Widget} from "../util/Widget.ts";

export const DeleteWidgetModal = (widget: Widget) => {

    const {name} = widget;

    const [warningModal, setWarningModal] = useState(false);
    const toggle = () => setWarningModal(!warningModal);

    const onConfirm = (widget: Widget) => {
        deleteWidget(widget).then(r => console.log(r));
        toggle(); // Close modal
    };

    const handleDelete = (widget: Widget) => {
        deleteWidget(widget).then(r => console.log(`${widget.name} deleted.` + r))
    }
    const handleChange = (event: any) => {
        console.log(`${event.target.name}: ${event.target.value}`) ;
    }


    return (
        <>
            <button onClick={toggle}>Destroy This Widget
            </button>
            <Modal isOpen={warningModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Confirmation to Destroy
                </ModalHeader>
                <div className="col-md-6">
                    <label htmlFor="widget_name" className="form-label">To confirm, retype the name: {name}</label>
                    <input type="text" className="form-control" id="widget_name" placeholder={`${name}`} onChange={handleChange} />
                </div>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}