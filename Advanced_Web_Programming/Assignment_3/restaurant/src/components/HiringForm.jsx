import React, { useState } from 'react';
import {useForm} from "react-hook-form" ;
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup" ;

const HiringForm = (args) => {

    const DataSchema = yup.object({
        first_name: yup
            .string()
            .min(1, "Name must be at least 1 characters")
            .max(20, "Name can not be more than 20 characters")
            .required("Username is required"),
        last_name: yup
            .string()
            .min(1, "Name must be at least 1 characters")
            .max(20, "Name can not be more than 20 characters"),
        email: yup
            .string()
            .email("Must be a valid email"),
        phone_number: yup
            .string()
            .required("Phone is required")
            .matches(/^\d{3}-\d{3}-\d{4}$/, "Use the format 111-222-3333"),
        address_1: yup
            .string()
            .min(1, "Address must be at least 1 characters.")
            .max(30, "Address can not be more than 30 characters.")
            .required("Address is required"),
        address_2: yup
            .string()
            .min(1, "Address must be at least 1 characters.")
            .max(30, "Address can not be more than 30 characters."),
        city: yup
            .string()
            .min(1, "City must be at least 1 characters.")
            .max(29, "City can not be more than 29 characters.")
            .required("Address is required"),
        state: yup
            .string()
            .required("state is required")
            .oneOf(["texas", "missouri", "illinois"], "This is the worst state. Go somewhere else."),
        zip: yup
            .number()
            .transform((value, originalValue) => {
                if (originalValue === "" || originalValue == null) return null;
                const n = Number(originalValue);
                return Number.isNaN(n) ? NaN : n;
            }),
        age: yup
            .number()
            .transform((value, originalValue) => {
                if (originalValue === "" || originalValue == null) return null;
                const n = Number(originalValue);
                return Number.isNaN(n) ? NaN : n;
            })
            .nullable()
            .typeError("Age is required")
            .integer("Age must be a whole number")
            .min(21, "Age must be at least 21")
            .max(99, "Age must be at most 99")
            .required("Age is required"),
        married: yup
            .string()
            .required("Must be yes or no."),
        password: yup
            .string()
            .required("You must enter a password"),
        colors: yup,
        moreInfo: yup
            .string()
            .max(30, `Must be 30 characters or fewer`)
            .default(""),
    });

    const {
        register, // This replaces the "name"
        handleSubmit, // This is how we handle Data once submitted
        setValue,
        reset,
        formState: {errors},
        watch
    } = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            zip: "",
            married: "no",
            password: "",
            colors: "",
            moreInfo: ""
        },
        resolver: yupResolver(DataSchema),
    });


    const moreInfoValue = watch("moreInfo", "");
    const remaining = 30 - (moreInfoValue?.length || 0);

    const onSubmit = (data) => {
        const payload = {
            first_name: data.first_name,
            last_name: data.last_name,
            age: data.age,
            phone: data.phone,
            moreInfo: data.moreInfo,
        };
        console.log("Submitted payload:", payload);
        // reset();
        // Handling the Modal and its inial state.
        const [modal, setModal] = useState(false);

        // Open/Close the Modal.
        const toggle = () => setModal(!modal);

        return (
            <>
                <div>
                    <div>
                        <Button color="danger" onClick={toggle}>
                            Click Me
                        </Button>
                        <Modal isOpen={modal} toggle={toggle} {...args}>
                            <ModalHeader toggle={toggle}>
                                Pickler Application
                            </ModalHeader>
                            <ModalBody>
                                <form onSubmit={handleSubmit(onSubmit)} id="form_application" className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="first_name" className="form-label">First Name</label>
                                        <input type="text" className="form-control"
                                               id="first_name" {...register("first_name")} placeholder="First Name"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="last_name" className="form-label">Last Name</label>
                                        <input type="text" className="form-control"
                                               id="last_name" {...register("last_name")}
                                               placeholder="Last Name (optional)"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="user_email" className="form-label">Email</label>
                                        <input type="email" className="form-control"
                                               id="user_email" {...register("email")} placeholder="Email"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                        <input type="tel" className="form-control"
                                               id="phone_number" {...register("phone_number")}
                                               placeholder="111-222-3333"/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address_1" className="form-label">Street Address</label>
                                        <input type="text" className="form-control"
                                               id="address_1" {...register("address_1")} placeholder="Address 1"/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address_2_optional" className="form-label">Street Address
                                            2</label>
                                        <input type="text" className="form-control"
                                               id="address_2_optional" {...register("address_2")}
                                               placeholder="Address 2 (optional)"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="city" className="form-label">City</label>
                                        <input type="text" className="form-control" id="city" {...register(city)}
                                               placeholder="City"/>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <select name="state" required={true} id="state" className="form-select">
                                            <option value="" disabled>Choose...</option>
                                            <option value="new_york">NY</option>
                                            <option value="texas">TX</option>
                                            <option value="illinois">IL</option>
                                            <option value="missouri">MO</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <label htmlFor="zip" className="form-label">Zip</label>
                                        <input type="text" required={false} className="form-control"
                                               id="zip" {...register("zip")} placeholder="Zip"/>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="age" className="form-label">Age</label>
                                        <input type="number" required={true} className="form-control" defaultValue={21}
                                               id="age" {...register("age")} placeholder="Age"/>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="birthdate" className="form-label">Birthday</label>
                                        <input type="date" className="form-control"
                                               id="birthdate" {...register("birthdate")} />
                                    </div>
                                    <fieldset className="col-12">
                                        <legend>Are you married?</legend>
                                        <div>
                                            <input type="radio" id="married_yes" {...register("married")} value="Yes"/>
                                            <label htmlFor="married_yes">YES</label>
                                            <input type="radio" id="married_no" {...register("married")} value="No"
                                                   defaultChecked/>
                                            <label htmlFor="married_no">NO</label>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <legend>Account Setup</legend>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" {...register("password")} id="password"
                                               placeholder="Please Enter a Password"/>
                                        <p>Password must be 8-12 characters long and include:</p>
                                        <ul>
                                            <li>one lowercase letter</li>
                                            <li>one uppercase letter</li>
                                            <li>one special symbol</li>
                                            <li>one number</li>
                                        </ul>
                                        <fieldset>
                                            <legend>Please Select Your Favorite Colors</legend>
                                            <input type="checkbox" id="blue" {...register("colors")} value="Blue"/>
                                            <label htmlFor="blue">Blue</label>
                                            <input type="checkbox" id="green" {...register("colors")} value="Green"/>
                                            <label htmlFor="green">Green</label>
                                            <input type="checkbox" id="orange" {...register("colors")} value="Orange"/>
                                            <label htmlFor="orange">Orange</label>
                                            <input type="checkbox" id="purple" {...register("colors")} value="Purple"/>
                                            <label htmlFor="purple">Purple</label>
                                            <input type="checkbox" id="red" {...register("colors")} value="Red"/>
                                            <label htmlFor="red">Red</label>
                                        </fieldset>
                                    </fieldset>
                                    <div className="col-12">
                                    <textarea {...register("more_info")} id="more_info" className="form-control"
                                              cols="30"
                                              rows="4" placeholder="Comments"></textarea>
                                        {/*<p>Characters remaining: <span id="charCount">30</span></p>*/}
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" id="form_submit" className="btn btn-primary">Submit
                                        </button>
                                        <button type="reset" className="btn btn-secondary">Reset</button>
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={toggle}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </>
        );
    }
}
export default HiringForm ;