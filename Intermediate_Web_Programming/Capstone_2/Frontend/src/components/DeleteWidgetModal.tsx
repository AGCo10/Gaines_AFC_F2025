import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { deleteWidget } from "../util/WidgetClient.ts";
import type { Widget } from "../util/Widget.ts";
import * as React from "react";

interface DeleteWidgetProps {
    widget: Widget,
}
export const DeleteWidgetModal = ({widget}: DeleteWidgetProps ) => {
    const { name, id } = widget;

    const [warningModal, setWarningModal] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const toggle = () => setWarningModal(!warningModal);

    const handleDelete = () => {
        deleteWidget(id);
        console.log(`${widget.name} deleted.`);
        toggle(); // Close modal
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleConfirm = () => {
        if (inputValue === name) {
            handleDelete();
        } else {
            console.error("Widget name does not match.");
        }
    };

    return (
        <div className={'bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'}>
            <button onClick={toggle}>Destroy</button>
            <Modal isOpen={warningModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Confirmation to Destroy
                </ModalHeader>
                <ModalBody>
                    <div className="col-md-6">
                        <label htmlFor="widget_name" className="form-label">
                            To confirm, retype the name: <br />
                            <span className={'text-bg-danger'}>{name}</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="widget_name"
                            placeholder={`${name}`}
                            value={inputValue}
                            onChange={handleChange}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button id={'confirm_delete'} onClick={handleConfirm}>
                        Confirm
                    </Button>
                    <Button onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};