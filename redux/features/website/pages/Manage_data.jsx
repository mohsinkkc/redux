import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { view_data ,deletedata,view_singledata,update_data} from '../../action';


import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Manage_data() {

    const redirect=useNavigate();
    const { alluser,singleuser } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    console.log(alluser);
    useEffect(() => {
        dispatch(view_data());
    }, []);

    const subDelete=(id)=>{
        dispatch(deletedata(`http://localhost:3000/user/${id}`));
        toast.success('Delete Success');
        dispatch(view_data());
    }

    const substatus=(id)=>{
        dispatch(view_singledata(`http://localhost:3000/user/${id}`));
        if(singleuser.status=="Block")
        {
            dispatch(update_data(`http://localhost:3000/user/${id}`,{status:"Unblock"}));
            dispatch(view_data());
        }
        else
        {
            dispatch(update_data(`http://localhost:3000/user/${id}`,{status:"Block"}));
            dispatch(view_data());
        }
        dispatch(view_data());
    }

    


    return (
        <div>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-8 offset-md-2">
                        <div className="row mt">
                            <div className="col-md-12">
                                <div className="content-panel">
                                    <h4><i className="fa fa-angle-right" /> Manage User</h4><hr /><table className="table table-striped table-advance table-hover">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th> Name</th>
                                                <th> Email</th>
                                                <th> Mobile</th>

                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                alluser.map((item, index) => {
                                                    return (
                                                        <tr>
                                                            <th>{item.id}</th>
                                                            <th>{item.name}</th>
                                                            <th>{item.email}</th>
                                                            <th>{item.mobile}</th>
                                                            <th>
                                                                <button className='btn btn-danger me-1' onClick={()=>subDelete(item.id)}>Delete</button>
                                                                <button className='btn btn-danger me-1' onClick={()=>redirect('/edit_user/'+item.id)}>Edit</button>
                                                                <button className='btn btn-danger me-1' onClick={()=>substatus(item.id)}>{item.status}</button>
                                                            </th>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>{/* /content-panel */}
                            </div>{/* /col-md-12 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage_data