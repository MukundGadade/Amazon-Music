import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjectIdAndContentTypeyConfig } from "../utils/config";
import axios from "axios";

export const SignIn = () => {

    const [userInfo, setUserInfo] = useState({email : '', password : ''});

    const navigate = useNavigate();

    const handleChange = ({target : {name, value}}) => {
        setUserInfo({...userInfo, [name] : value});
    }

    const signIn = async(body) => {

        try {
            const res = await axios.post('https://academics.newtonschool.co/api/v1/user/login', body, getProjectIdAndContentTypeyConfig());
            console.log(res);

        } catch (error) {
            console.error(error.response.data.message);
        }

    }
 
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('userInfo : ', userInfo);

        signIn({...userInfo, appType : 'music'});
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email : </label>
                <input type="text" name="email" id="email" value={userInfo.email} onChange={handleChange} />

                <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="password" value={userInfo.password} onChange={handleChange} />

                <input type="submit" value="Sign In" />
            </form>
            <p>Not an already registerd user?</p>
            <button onClick={() => navigate('/signup')}>Sign Up Here!</button>
        </section>
    )

}