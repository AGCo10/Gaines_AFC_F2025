import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const HiringForm = (args) => {
    const DataSchema = yup.object({
        first_name: yup.string()
            .min(1, "Name must be at least 1 character")
            .max(20, "Name cannot be more than 20 characters")
            .required("First name is required"),
        last_name: yup.string()
            .min(1, "Name must be at least 1 character")
            .max(20, "Name cannot be more than 20 characters"),
        email: yup.string()
            .email("Must be a valid email"),
        phone_number: yup.string()
            .required("Phone is required")
            .matches(/^\d{3}-\d{3}-\d{4}$/, "Use the format 111-222-3333"),
        address_1: yup.string()
            .min(1, "Address must be at least 1 character.")
            .max(30, "Address cannot be more than 30 characters.")
            .required("Address is required"),
        address_2: yup.string()
            .min(1, "Address must be at least 1 character.")
            .max(30, "Address cannot be more than 30 characters."),
        city: yup.string()
            .min(1, "City must be at least 1 character.")
            .max(29, "City cannot be more than 29 characters.")
            .required("City is required"),
        state: yup.string()
            .required("State is required")
            .oneOf(["texas", "missouri", "illinois"], "Invalid state."),
        zip: yup.string()
            .required("Zip code is required"),
        age: yup.number()
            .integer("Age must be a whole number")
            .default(25)
            .min(25, "Age must be at least 25")
            .max(99, "Age must be at most 99")
            .required("Age is required"),
        married: yup.string()
            .required("Must be yes or no."),
        password: yup.string()
            .min(8, "Password must be at least 8 characters")
            .max(12, "Password may be at most 12 characters")
            .required("You must enter a password"),
        colors: yup.array().of(yup.string()),
        moreInfo: yup.string()
            .max(30, "Must be 30 characters or fewer")
            .default(""),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(DataSchema),
    });

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const onSubmit = (data) => {
        const payload = {
            first_name: data.first_name,
            last_name: data.last_name,
            age: data.age,
            phone: data.phone_number,
            address_1: data.address_1,
            address_2: data.address_2,
            city: data.city + " " + data.zip,
            married: data.married,
            colors: data.colors,
            moreInfo: data.moreInfo,
        };
        console.log("Submitted payload:", payload);
        reset(); // Reset form after submission
        toggle(); // Close modal
    };

    return (
        <>
            <Button color="danger" onClick={toggle}>
                Click Me
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader className={"form-head-foot"} toggle={toggle}>
                    Pickler Application
                </ModalHeader>
                <ModalBody className={"form-body"}>
                    <form onSubmit={handleSubmit(onSubmit)} id="form_application" className="row g-3 form-body">
                        <div className="col-md-6">
                            <label htmlFor="first_name" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="first_name" {...register("first_name")} placeholder="First Name"/>
                            {errors.first_name && <span className="text-danger">{errors.first_name.message}</span>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="last_name" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="last_name" {...register("last_name")} placeholder="Last Name (optional)"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" {...register("email")} placeholder="Email"/>
                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone_number" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" id="phone_number" {...register("phone_number")} placeholder="111-222-3333"/>
                            {errors.phone_number && <span className="text-danger">{errors.phone_number.message}</span>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="address_1" className="form-label">Street Address</label>
                            <input type="text" className="form-control" id="address_1" {...register("address_1")} placeholder="Address 1"/>
                            {errors.address_1 && <span className="text-danger">{errors.address_1.message}</span>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="address_2" className="form-label">Street Address 2</label>
                            <input type="text" className="form-control" id="address_2" {...register("address_2")} placeholder="Address 2 (optional)"/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city" {...register("city")} placeholder="City"/>
                            {errors.city && <span className="text-danger">{errors.city.message}</span>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="state" className="form-label">State</label>
                            <select id="state" className="form-select" {...register("state")}>
                                <option value="" disabled>Choose...</option>
                                <option value="texas">TX</option>
                                <option value="illinois">IL</option>
                                <option value="missouri">MO</option>
                            </select>
                            {errors.state && <span className="text-danger">{errors.state.message}</span>}
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="zip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="zip" {...register("zip")} placeholder="Zip"/>
                            {errors.zip && <span className="text-danger">{errors.zip.message}</span>}
                        </div>
                        <div className="col-6">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input type="number" className="form-control" id="age" {...register("age")} placeholder="Age"/>
                            {errors.age && <span className="text-danger">{errors.age.message}</span>}
                        </div>
                        <fieldset className="col-12">
                            <legend>Are you married?</legend>
                            <div>
                                <input type="radio" id="married_yes" {...register("married")} value="Yes"/>
                                <label htmlFor="married_yes">YES</label>
                                <input type="radio" id="married_no" {...register("married")} value="No" defaultChecked/>
                                <label htmlFor="married_no">NO</label>
                            </div>
                        </fieldset>
                        <div className="col-12">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" {...register("password")} id="password" placeholder="Please Enter a Password"/>
                            {errors.password && <span className="text-danger">{errors.password.message}</span>}
                            <p>Password must be 8-12 characters long and include:</p>
                            <ul>
                                <li>one lowercase letter</li>
                                <li>one uppercase letter</li>
                                <li>one special symbol</li>
                                <li>one number</li>
                            </ul>
                        </div>
                        <fieldset>
                            <legend>Please Select Your Favorite Colors</legend>
                            {["Blue", "Green", "Orange", "Purple", "Red"].map(color => (
                                <div key={color}>
                                    <input type="checkbox" id={color.toLowerCase()} {...register("colors")} value={color}/>
                                    <label htmlFor={color.toLowerCase()}>{color}</label>
                                </div>
                            ))}
                        </fieldset>
                        <div className="col-12">
                            <textarea {...register("moreInfo")} id="more_info" className="form-control" cols="30" rows="4" placeholder="Comments"></textarea>
                        </div>

                        <div className="col-12">
                            <button type="submit" id="form_submit" className="btn btn-primary">Submit</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter style={{backgroundColor: "var(--background-cream)"}} className={"form-head-foot"}>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default HiringForm;