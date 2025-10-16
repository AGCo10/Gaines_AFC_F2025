import React, { useState } from 'react';
import {useForm} from "react-hook-form" ;
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const HiringForm = (args) => {

    // Handling the Modal and its inial state.
    const [modal, setModal] = useState(false);

    // Open/Close the Modal.
    const toggle = () => setModal(!modal);

    // Form Data Management below.
    const [formData, setFormData] = useState(initialState) ;
    const {first_name, last_name, user_email, phone_number, address_1, address_2, city, state, zip, age, married, colors, password} = formData ;
    const initialState = {
        first_name: '',
        last_name: '',
        user_email: '',
        phone_number: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        zip: '',
        age: '',
        married: 'no',
        colors: '',
        password: '',
    }

    return (
        <>
            <div>
                <div>
                    <Button color="danger" onClick={toggle}>
                        Click Me
                    </Button>
                    <Modal isOpen={modal} toggle={toggle} {...args}>
                        <ModalHeader  toggle={toggle}>
                            Pickler Application
                        </ModalHeader>
                        <ModalBody>
                            <form action="/submit" id="form_application" method="dialog" className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="first_name" className="form-label">First Name</label>
                                    <input type="text" required={true} className="form-control" id="first_name" name="firstName"
                                           placeholder="First Name" minLength="1" maxLength="20"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="last_name" className="form-label">Last Name</label>
                                    <input type="text" required={false} className="form-control" id="last_name" name="lastName"
                                           placeholder="Last Name (optional)"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="user_email" className="form-label">Email</label>
                                    <input type="email" required={true} className="form-control" id="user_email" name="email"
                                           placeholder="Email"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                    <input type="tel" required={true} className="form-control" id="phone_number" name="phoneNumber" pattern = "^\d{3}-\d{3}-\d{4}$"
                                           placeholder="111-222-3333"/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address_1" className="form-label">Street Address</label>
                                    <input type="text" required={true} className="form-control" id="address_1" name="address1" maxLength={30}
                                           placeholder="Address 1"/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address_2_optional" className="form-label">Street Address 2</label>
                                    <input type="text" required={false} className="form-control" id="address_2_optional" name="address2" maxLength={30}
                                           placeholder="Address 2 (optional)"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" required={true}  className="form-control" id="city" name="city" placeholder="City"
                                           maxLength={29}/>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select name="state" required={true}  id="state" className="form-select">
                                        <option value="" disabled>Choose...</option>
                                        <option value="new_york">NY</option>
                                        <option value="texas">TX</option>
                                        <option value="illinois">IL</option>
                                        <option value="missouri">MO</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" required={false} className="form-control" id="zip" name="zip" pattern="\d{5}"
                                           placeholder="Zip"/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="age" className="form-label">Age</label>
                                    <input type="number" required={true} className="form-control" defaultValue={21} id="age" name="age"
                                           placeholder="Age"/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="birthdate" className="form-label">Birthday</label>
                                    <input type="date" className="form-control" id="birthdate" name="birthdate" minLength={21} />
                                </div>
                                <fieldset className="col-12">
                                    <legend>Are you married?</legend>
                                    <div>
                                        <input type="radio" id="married_yes" name="married" value="Yes"/>
                                        <label htmlFor="married_yes">YES</label>
                                        <input type="radio" id="married_no" name="married" value="No" defaultChecked/>
                                        <label htmlFor="married_no">NO</label>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend>Account Setup</legend>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" required={true} name="password" id="password"
                                           placeholder="Please Enter a Password" pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?:{}|<>])[A-Za-z\d!@#$%^&*(),.?:{}|<>]{8,12}$/" />
                                    <p>Password must be 8-12 characters long and include:</p>
                                    <ul>
                                        <li>one lowercase letter</li>
                                        <li>one uppercase letter</li>
                                        <li>one special symbol</li>
                                        <li>one number</li>
                                    </ul>
                                    <fieldset>
                                        <legend>Please Select Your Favorite Colors</legend>
                                        <input type="checkbox" id="blue" name="blue" value="Blue"/>
                                        <label htmlFor="blue">Blue</label>
                                        <input type="checkbox" id="green" name="green" value="Green"/>
                                        <label htmlFor="green">Green</label>
                                        <input type="checkbox" id="orange" name="orange" value="Orange"/>
                                        <label htmlFor="orange">Orange</label>
                                        <input type="checkbox" id="purple" name="purple" value="Purple"/>
                                        <label htmlFor="purple">Purple</label>
                                        <input type="checkbox" id="red" name="red" value="Red"/>
                                        <label htmlFor="red">Red</label>
                                    </fieldset>
                                </fieldset>
                                <div className="col-12">
                                    <textarea name="more_info" id="more_info" className="form-control" cols="30"
                                              rows="4" maxLength={30} placeholder="Comments"></textarea>
                                    {/*<p>Characters remaining: <span id="charCount">30</span></p>*/}
                                </div>
                                <div className="col-12">
                                    <button type="submit" id="form_submit" className="btn btn-primary">Submit</button>
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
export default HiringForm ;