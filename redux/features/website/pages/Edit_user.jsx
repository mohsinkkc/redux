import React,{useState,useEffect} from 'react'
import { Link,redirect,useParams,useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import {view_singledata ,update_data } from '../../action';
import { useDispatch , useSelector} from 'react-redux';


function Edit_user() {

    const redirect=useNavigate();
    const {id}=useParams();
    const dispatch=useDispatch();

    const {singleuser}=useSelector((state)=>state.user);

    useEffect(()=>{
        dispatch(view_singledata(`http://localhost:3000/user/${id}`));
    },[]);

    useEffect(()=>{
        setFormvalue({...singleuser});
    },[singleuser]);


    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    })

    const onchange = (e) => {
        setFormvalue({ ...formvalue,[e.target.name]: e.target.value });
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
           dispatch(update_data(`http://localhost:3000/user/${id}`,formvalue));
           toast.success('Update Success');
           return redirect('/manage_data');
        }
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-8 offset-md-2">
                        <h2>Edit User</h2>
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
                                                <button onClick={onsubmit} className="btn btn-primary w-100 py-3" type="submit">Save</button>
                                              
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

export default Edit_user