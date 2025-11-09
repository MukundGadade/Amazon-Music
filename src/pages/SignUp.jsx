import axios from "axios";
import { useState } from "react";
// import { getProjectIdAndContentTypeyConfig, getProjectIdAndContentTypeyConfigForFetch } from "../utils/config";
import { getProjectIdAndContentTypeyConfig } from "../utils/config";

export const SignUp = () => {

    const [userInfo, setUserInfo] = useState({name : '', email : '', password : ''});

    const handleChange = ({target : {name, value}}) => {
        setUserInfo({...userInfo, [name] : value});
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

            console.log(res);
            // const data = await res.json();
            // console.log(data);

            if(res.data.token) {
                sessionStorage.setItem('authToken', res.data.token);
                sessionStorage.setItem('userInfo', JSON.stringify(res.data.data.user));
            }

        } catch (error) {
            console.error(error.response.data.message);
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('userInfo : ', userInfo);

        const body = {...userInfo, appType : 'music'};
        sendCreateUserReq(body);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" id="name" value={userInfo.name} onChange={handleChange} />

            <label htmlFor="email">Email : </label>
            <input type="text" name="email" id="email" value={userInfo.email} onChange={handleChange} />
            
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" id="password" value={userInfo.password} onChange={handleChange} />
            
            <input type="submit" value="Sign Up" />
        </form>
    )

}