import React from 'react'
import { NavLink } from 'react-router-dom' 

export default function Common(props) {
    return (
        <>
        <div id="header" className="d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div  className="row">
                            <div className="right_section col-md-6 pt-5 d-flex justify-content-center flex-column">
                                <h1> {props.name} <strong className="brand-name">Ibrar Ahmed</strong></h1>
                                <p className="my-3">We are a good developer team which works with each others</p>
                                <div className="">
                                    <NavLink to={props.visit}  className="get-started btn btn-outline-primary">{props.btname}</NavLink>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="container">
                                    <div className="pt-5">
                                        <img src={props.imgsrc} className="img-fluid animated rocket__img" alt="" />
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
