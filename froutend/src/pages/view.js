import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../http";

export default function View(props)
{
    const [inputs,setInputs] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        fetchUser();
    },[]);
    const fetchUser = () =>{
        http.get('users/'+id,'/show').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email
               });
          
        });
    }
    return(<div>
        <div className="container">
        <div className="row">
        <div className="col-md-6">
        Name :<h3 id="name_id">{inputs.name} </h3>
        </div>
        <div className="col-md-6">
        Email:<h3 id="email_id">{inputs.email}</h3>
        </div>
        </div>
        </div>
        </div>)
}