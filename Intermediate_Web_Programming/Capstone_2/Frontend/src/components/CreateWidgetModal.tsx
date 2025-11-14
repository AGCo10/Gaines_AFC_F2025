import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { addWidget, uploadImage } from "../util/WidgetClient.ts";

export const CreateWidgetModal = () => {
    const ModalSchema = yup.object({
        name: yup.string()
            .min(3, "Name must be at least 3 characters.")
            .max(25, "Name may be no more than 25 characters.")
            .required("Name your Creation!"),
        description: yup.string()
            .max(255, "Description may be no more than 255 characters."),
        price: yup.number().nullable(), // Allow nullable for price
        rating: yup.number().nullable(), // Allow nullable for rating
        quantity: yup.number().nullable(), // Allow nullable for quantity
        imageUrl: yup.string().nullable() // Add a field for image URL
    });

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(ModalSchema),
        defaultValues: {
            name: '',
            description: '',
            price: null,
            rating: null,
            quantity: null,
            imageUrl: ''
        }
    });

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const onSubmit = async (data: any) => {
        const payload = {
            name: data.name,
            description: data.description,
            price: data.price,
            rating: data.rating,
            quantity: data.quantity,
            imageUrl: data.imageUrl // Use image URL for submission
        };

        console.log("Submitted widget:", payload);
        await addWidget(payload);
        reset(); // Reset form after submission
        toggle(); // Close modal
    };

    const handleImageUpload = async (event: any) => {
        const file = event.target.files[0];
        if (!file) return;

        try {
            const imageUrl = await uploadImage(file); // Client call to upload image
            setValue("imageUrl", imageUrl); // Set image URL in the form state
        } catch (err) {
            console.error("Error uploading image:", err);
        }
    };

    return (
        <>
            <button className="Create-Button m-auto w-1/4" onClick={toggle}>Forge a Widget</button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Build A Widget
                </ModalHeader>
                <ModalBody className="Create-Modal form-body col-12">
                    <Form onSubmit={handleSubmit(onSubmit)} id="widget_builder" className="row g-3 form-body">
                        <div className="col-md-6">
                            <label htmlFor="widget_name" className="form-label">Widget Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="widget_name"
                                {...register("name")}
                                placeholder="Widget Name"
                            />
                            {errors.name && <span className="text-danger">{errors.name.message}</span>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="widget_description" className="form-label">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="widget_description"
                                {...register("description")}
                                placeholder="Widget Description"
                            />
                            {errors.description && <span className="text-danger">{errors.description.message}</span>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="widget_price" className="form-label">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="widget_price"
                                {...register("price")}
                                placeholder="Widget Price"
                                step={0.01}
                            />
                            {errors.price && <span className="text-danger">{errors.price.message}</span>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="widget_image" className="form-label">Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="form-control"
                                id="widget_image"
                                onChange={handleImageUpload} // Updated function
                                required={false}
                            />
                            {errors.imageUrl && <span className="text-danger">{errors.imageUrl.message}</span>}
                        </div>
                        <div className="col-12">
                            <Button type="submit" id="widget_submit">Forge Widget</Button>
                            <Button type="reset" id="widget_reset">Reset</Button>
                        </div>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};