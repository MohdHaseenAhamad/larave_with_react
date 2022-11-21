import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";
export default function Create() {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs (values => ({...values,[name]:value}))
    }
    const submitForm = () => {
        http.post('/users',inputs).then((res)=>{
            navigate('/');
        });
    }
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">User Name</label>
                    <input type="text" className="form-control" name="name" id="name"  placeholder="Enter User Name"
                    value={inputs.name || ''} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" className="form-control" id="email" placeholder="Enter email"
                    value={inputs.email || ''} onChange={handleChange} />
    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" className="form-control" value={inputs.password || ''} onChange={handleChange} id="password" placeholder="Password" />
                </div>
                <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}