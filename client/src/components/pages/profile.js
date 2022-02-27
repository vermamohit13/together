import React, { PureComponent } from 'react'
import Fields from "./fields";

export default class Profile extends PureComponent {
    render() {

        return (

            <div>
                <div className="container register">
                    <div className="row">
                        <div className="col-md-3 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt />
                            <h3>Your Profile</h3>
                            <p>Please enter your interest in order to have a better experience!!</p>
                            <input type="submit" name defaultValue="Login" /><br />
                        </div>
                        <div className="col-md-9 register-right">

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h3 className="register-heading">Edit Your Profile:</h3>
                                    <div className="row register-form">
                                        <div className="col-md-6" id="change">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name *" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last Name *" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Your  State" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Your City" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Your Collage" />
                                            </div>

                                        </div>
                                        <div className="col-md-6" id="change">
                                            <div className="form-group">

                                                <input type="email" className="form-control" placeholder="Your Email *" />

                                            </div>

                                            <Fields />


                                            <input type="submit" className="btnRegister" defaultValue="Register" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
