import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Button, Form} from "react-bootstrap";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useState} from "react";
import {updateWidget} from "../util/WidgetClient.ts";
import type {Widget} from "../util/Widget.ts";

interface UpdateWidgetProps {
    widget: Widget,
}
export const UpdateWidgetModal = ({widget}: UpdateWidgetProps) => {
    const { name, id, rating, price, description } = widget;

    const ModalSchema = yup.object({
        id: yup.number(),
        name: yup.string()
            .min(3, "Name must be at least 3 characters.")
            .max(25, "Name may be no more than 25 characters.")
            .required("Name your Creation!"),
        description: yup.string()
            .max(255, "Description may be no more than 255 characters."),
        price: yup.number(),
        rating: yup.number(),
    })

    const {
        register,
        reset,
        handleSubmit,
        formState: {errors},
        setValue,
    } = useForm({
        resolver: yupResolver(ModalSchema),
        defaultValues: {
            id: id,
            name: name,
            description: description,
            price: price,
            rating: rating,
        }
    });

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const onSubmit = (data: any) => {
        const payload = {
            id: data.id,
            name: data.name,
            description: data.description,
            price: data.price,
            rating: data.rating,
        };

        console.log("Submitted widget:", payload);
        updateWidget(payload).then(r => console.log(r));
        reset(); // Reset form after submission
        toggle(); // Close modal
    };

    const handleChange = (event: any) => {
        console.log(`${event.target.name}: ${event.target.value}`) ;
        setValue(event.target.name, event.target.value) ;
    }


    return (
        <div className={'bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'}>
            <button onClick={toggle}>Reforge
            </button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Reforge This Widget
                </ModalHeader>
                <ModalBody className={"form-body col-12"}>
                    <Form onSubmit={handleSubmit(onSubmit)} id="widget_builder" className="row g-3 form-body">
                        <div className="col-md-6">
                            <label htmlFor="widget_name" className="form-label">Widget Name</label>
                            <input type="text" className="form-control" id="widget_name" {...register("name")} placeholder={`${name}`} onChange={handleChange} />
                            {errors.name && <span className="text-danger">{errors.name.message}</span>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="widget_description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="widget_description" {...register("description")} placeholder={`${description}`} onChange={handleChange} />
                            {errors.description && <span className="text-danger">{errors.description.message}</span>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="widget_price" className="form-label">Price</label>
                            <input type="number" className="form-control" id="widget_price" {...register("price")} placeholder={`${price}`} onChange={handleChange} step={0.01} />
                            {errors.price && <span className="text-danger">{errors.price.message}</span>}
                        </div>
                        <div className={'col-12'}>
                            <Button type="submit" id="widget_submit" className="">Forge
                            </Button>
                            <Button type="reset" id="widget_reset" className="">Reset
                            </Button>
                        </div>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}