// First name: required; 1–20 characters
// Last name: optional; if present 1–20 characters
// Address 1: required; maximum length should be defined by you (reasonable choice)
// City: required; maximum 29 characters
// State: required; select with only three two-letter options
// Age: required; range 21–99; default value 21
// Phone: required
// Email: required
// Password: required; 8–12 characters; must include at least one uppercase, one lowercase, one number, and one special symbol; enforce with pattern
// Married: radio buttons; default set to “single”
// Buttons: Submit and Reset
import React from 'react';


const HiringForm = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={onClose}>Close</button>
                <div className="modal fade" id="apply_here" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header fs-1 form-head-foot" id="exampleModalLabel">
                                Pickler Application
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body form-body">
                                <form action="/submit" id="application" method="dialog" className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="first_name" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="first_name" name="first name" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="last_name" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="last_name" name="last name" placeholder="Last Name (optional)" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="user_email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="user_email" name="email" placeholder="Email" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                        <input type="tel" className="form-control" id="phone_number" name="phone number" placeholder="111-222-3333" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address_1" className="form-label">Street Address</label>
                                        <input type="text" className="form-control" id="address_1" name="address_1" placeholder="Address 1" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="address_2_optional" className="form-label">Street Address 2</label>
                                        <input type="text" className="form-control" id="address_2_optional" name="address_2_optional" placeholder="Address 2 (optional)" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="city" className="form-label">City</label>
                                        <input type="text" className="form-control" id="city" name="city" placeholder="City" maxLength="29" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <select name="state" id="state" className="form-select">
                                            <option value="" disabled selected>Choose...</option>
                                            <option value="new_york">NY</option>
                                            <option value="texas">TX</option>
                                            <option value="illinois">IL</option>
                                            <option value="missouri">MO</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <label htmlFor="zip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="zip" name="zip" pattern="\d{5}" placeholder="Zip" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="age" className="form-label">Age</label>
                                        <input type="number" className="form-control" id="age" name="age" placeholder="Age" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="birthdate" className="form-label">Birthday</label>
                                        <input type="date" className="form-control" id="birthdate" name="birthdate" />
                                    </div>
                                    <fieldset className="col-12">
                                        <legend>Are you married?</legend>
                                        <div>
                                            <input type="radio" id="married_yes" name="married" value="Yes" />
                                            <label htmlFor="married_yes">YES</label>
                                            <input type="radio" id="married_no" name="married" value="No" />
                                            <label htmlFor="married_no">NO</label>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <legend>Account Setup</legend>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name="password" id="password" placeholder="Please Enter a Password" />
                                        <p>Password must be 8-12 characters long and:</p>
                                        <ul>
                                            <li>include at least one lowercase letter</li>
                                            <li>include at least one uppercase letter</li>
                                            <li>include at least one special symbol</li>
                                            <li>include at least one number</li>
                                        </ul>
                                        <fieldset>
                                            <legend>Please Select Your Favorite Colors</legend>
                                            <input type="checkbox" id="blue" name="blue" value="Blue" />
                                            <label htmlFor="blue">Blue</label><br />
                                            <input type="checkbox" id="green" name="green" value="Green" />
                                            <label htmlFor="green">Green</label><br />
                                            <input type="checkbox" id="orange" name="orange" value="Orange" />
                                            <label htmlFor="orange">Orange</label><br />
                                            <input type="checkbox" id="purple" name="purple" value="Purple" />
                                            <label htmlFor="purple">Purple</label><br />
                                            <input type="checkbox" id="red" name="red" value="Red" />
                                            <label htmlFor="red">Red</label><br />
                                        </fieldset>
                                    </fieldset>
                                    <div className="col-12">
                                        <textarea name="more info" id="more_info" className="form-control" cols="30" rows="4" placeholder="Comments"></textarea>
                                        <p>Characters remaining: <span id="charCount">30</span></p>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" id="form_submit" className="btn btn-primary">Submit</button>
                                        <button type="reset" className="btn btn-secondary">Reset</button>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer" style={{ backgroundColor: 'var(--background-cream)' }}>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HiringForm ;