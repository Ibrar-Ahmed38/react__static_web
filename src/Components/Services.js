import React from 'react'
import { NavLink } from 'react-router-dom'
import Images from './images/card__1.jpg'

export default function Services() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>

            <div className="services_section">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                <div className="col-md-4 mx-auto">
                                    <div className="card">
                                        <img src={Images} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Services Images.</p>
                                            <NavLink to="" className="btn btn-primary">Click Here</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mx-auto">
                                    <div className="card">
                                        <img src={Images} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Services Images.</p>
                                            <NavLink href="#" className="btn btn-primary">Click Here</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mx-auto">
                                    <div class="card">
                                        <img src={Images} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Services Images.</p>
                                            <NavLink href="#" class="btn btn-primary">Click Here</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mx-auto">
                                    <div class="card">
                                        <img src={Images} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Services Images.</p>
                                            <NavLink href="#" class="btn btn-primary">Click Here</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mx-auto">
                                    <div className="card">
                                        <img src={Images} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Services Images.</p>
                                            <NavLink href="#" className="btn btn-primary">Click Here</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mx-auto">
                                    <div className="card">
                                        <img src={Images} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Services Images.</p>
                                            <NavLink href="#" className="btn btn-primary">Click Here</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}
