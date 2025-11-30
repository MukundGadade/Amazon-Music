import axios from "axios";
import { useState } from "react";
// import { getProjectIdAndContentTypeyConfig, getProjectIdAndContentTypeyConfigForFetch } from "../utils/config";
import { getProjectIdAndContentTypeyConfig } from "../utils/config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({name : '', email : '', password : ''});

    const handleChange = ({target : {name, value}}) => {
        setUserInfo({...userInfo, [name] : value.trim()});
    }

    const sendCreateUserReq = async(body) => {

        try {
            const res = await axios.post('https://academics.newtonschool.co/api/v1/user/signup', body, getProjectIdAndContentTypeyConfig());

            // Fetch Request
            /* const res = await fetch('https://academics.newtonschool.co/api/v1/user/signup',
                {
                    method: 'POST',
                    headers: getProjectIdAndContentTypeyConfigForFetch(),
                    body: JSON.stringify(body)
                }
            ); */

            // console.log(res);
            // const data = await res.json();
            // console.log(data);

            if(res.data.status === "success" && res.data.token) {
                sessionStorage.setItem('authToken', res.data.token);
                sessionStorage.setItem('userInfo', JSON.stringify(res.data.data.user));

                Swal.fire({
                    title: "User registered successfully",
                    icon: "success"
                });

                navigate('/signin');
                  
            } else {

                Swal.fire({
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    icon: 'error'
                })
                
            }

        } catch (error) {
            console.error(error.response.data.message);

            if(error.response.data.message === "User already exists") {
                Swal.fire({
                    title: 'Error!',
                    text: 'User already exists!',
                    icon: 'error'
                })
            } else {
                Swal.fire({
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    icon: 'error'
                })
            }

        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('userInfo : ', userInfo);

        const {name, email, password} = userInfo;

        if(!name || !email || !password) {

            Swal.fire({
                title: 'Error!',
                text: 'Please fill all the required fields properly!',
                icon: 'error'
            })

            return;
        } else if(name.length < 3) {

            Swal.fire({
                title: 'Error!',
                text: 'Name should have atleast 3 characters!',
                icon: 'error'
            })

        } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

            Swal.fire({
                title: 'Error!',
                text: 'Please enter valid email!',
                icon: 'error'
            })

        } else if(password.length < 5) {

            Swal.fire({
                title: 'Error!',
                text: 'Password should have atleast 5 characters!',
                icon: 'error'
            })

        } else {
            const body = { ...userInfo, appType: 'music' };
            sendCreateUserReq(body);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name<span className="require-field">*</span> : </label>
            <input type="text" name="name" id="name" value={userInfo.name} onChange={handleChange} />

            <label htmlFor="email">Email<span className="require-field">*</span> : </label>
            <input type="email" name="email" id="email" value={userInfo.email} onChange={handleChange} />
            
            <label htmlFor="password">Password<span className="require-field">*</span> : </label>
            <input type="password" name="password" id="password" value={userInfo.password} onChange={handleChange} />
            
            <input type="submit" value="Sign Up" />
        </form>
    )

}