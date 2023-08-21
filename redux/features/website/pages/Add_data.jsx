import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {  toast } from 'react-toastify';
import { add_data } from '../../action';
import { useDispatch } from 'react-redux';


function Add_data() {

    const dispatch=useDispatch();
    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        status: "",
    })

    const onchange = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const validation = () => {
        var result = true;
        if (formvalue.name == "" || formvalue.name == null) {
            result = false;
            toast.error('Name Field is required !');
            return false;
        }
        if (formvalue.email == "" || formvalue.email == null) {
            result = false;
            toast.error('Email Field is required !');
            return false;
        }
        if (formvalue.password == "" || formvalue.password == null) {
            result = false;
            toast.error('Password Field is required !');
            return false;
        }
        if (formvalue.mobile == "" || formvalue.mobile == null) {
            result = false;
            toast.error('Mobile Field is required !');
            return false;
        }

        return result;
    }


    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            dispatch(add_data(`http://localhost:3000/user`,formvalue));
            setFormvalue({...formvalue,name:"",email:"",password:"",mobile:"",});
            toast.success('Register Success');
        }
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-8 offset-md-2">
                        <h2>Add Data</h2>
                        <div className="row g-4">


                            <div className="col-md-12">
                                <div className="wow fadeInUp p-5" data-wow-delay="0.2s">
                                    <form encType='multipart/form-data'>
                                        <div className="row g-3">
                                            <div className="col-md-12">
                                                <div className="form-floating">
                                                    <input type="text" value={formvalue.name} onChange={onchange} className="form-control" name="name" id="name" placeholder="Your Name" />
                                                    <label htmlFor="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-floating">
                                                    <input type="email" value={formvalue.email} onChange={onchange} className="form-control" name="email" id="email" placeholder="Your Email" />
                                                    <label htmlFor="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="password" value={formvalue.password} onChange={onchange} className="form-control" name="password" id="password" placeholder="Password" />
                                                    <label htmlFor="subject">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="number" value={formvalue.mobile} onChange={onchange} className="form-control" name="mobile" id="password" placeholder="Mobile" />
                                                    <label htmlFor="subject">Mobile</label>
                                                </div>
                                            </div>


                                            <div className="col-12">
                                                <button onClick={onsubmit} className="btn btn-primary w-100 py-3" type="submit">Signup</button>
                                                <br />
                                                <br /><br />
                                                <Link to='/login'>If you already registered then Click Here For Login</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_data