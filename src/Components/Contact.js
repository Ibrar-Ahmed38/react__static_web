import React, { useState } from 'react'

export default function Contact() {

    const [data ,  SetData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        Msg:"",
    })

    const InputEvent =(event)=> {
        const {name, value} = event.target

        SetData((preVal)=>{
            return{
                ...preVal,
               [name] : value,
            }
        })
    }

   
     const formsubmit =  (e)=> {
        e.preventDefault();
        alert(`my first name is ${data.firstname} my last name is ${data.lastname} my email is ${data.email} my message is halathi muft ji mani khain wara ${data.Msg}`)
    }
    return (
        <div className="my-5">
            <div className="container">
                <h1 className="text-center">Contact Us</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formsubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">First Name</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                 name="firstname"
                                 value={data.firstname}
                                 onChange={InputEvent}
                                 placeholder="Enter your first name" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                 name="lastname"
                                 value={data.lastname}
                                 onChange={InputEvent}
                                 placeholder="Enter your last name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                 name="email"
                                 value={data.email}
                                 onChange={InputEvent}
                                 placeholder="name@example.com" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" value={data.Msg} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>


                        </form>
                        <div className="col-12">
                            <button className="btn btn-outline-secondary" type="submit">Submit form</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
