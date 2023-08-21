import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {  toast } from 'react-toastify';
import { add_data } from '../../action';
import { useSelector,useDispatch } from 'react-redux';

function Contact() {
  

    const dispatch=useDispatch();
    const {name}=useSelector((state)=>state.user);


    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        msg: "",
        
    })

    const onchange = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
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
     
        if (formvalue.msg == "" || formvalue.msg == null) {
            result = false;
            toast.error('msg Field is required !');
            return false;
        }

        return result;
    }


    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            dispatch(add_data(`http://localhost:3000/contact`,formvalue));
            setFormvalue({...formvalue,name:"",email:"",msg:"",});
            toast.success('Contact Success');
        }
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-8 offset-md-2">
                        <h2>Add Contact {name} : {age}</h2>
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
                                            
                                           
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="email" value={formvalue.email} onChange={onchange} className="form-control" name="email" id="password" placeholder="Email" />
                                                    <label htmlFor="subject">Email</label>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea  value={formvalue.msg} onChange={onchange} className="form-control" name="msg" id="password" placeholder="message" >{formvalue.msg}</textarea>
                                                    <label htmlFor="subject">message</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button onClick={onsubmit} className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                                <br />
                                               
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


export default Contact