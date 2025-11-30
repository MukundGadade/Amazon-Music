import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjectIdAndContentTypeyConfig } from "../utils/config";
import axios from "axios";
import { useLogin } from "../Provider/LoginProvider";
import Swal from "sweetalert2";

export const SignIn = () => {

    const [userInfo, setUserInfo] = useState({email : '', password : ''});
    const {setIsUsrLoggedIn} = useLogin();

    const navigate = useNavigate();

    const handleChange = ({target : {name, value}}) => {
        setUserInfo({...userInfo, [name] : value.trim()});
    }

    const signIn = async(body) => {

        try {
            const res = await axios.post('https://academics.newtonschool.co/api/v1/user/login', body, getProjectIdAndContentTypeyConfig());
            // console.log(res);

            if(res.data.status === "success" && res.data.token) {
                setIsUsrLoggedIn(true);
                navigate('/');
            } else {
                setIsUsrLoggedIn(false);

                Swal.fire({
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    icon: 'error'
                })
            }

        } catch (error) {
            setIsUsrLoggedIn(false);
            console.error(error.response.data.message);

            if(error.response.data.message === "Incorrect EmailId or Password") {
                Swal.fire({
                    title: 'Error!',
                    text: 'Incorrect email or password for sign in!',
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

        const {email, password} = userInfo;

        if(!email || !password) {

            Swal.fire({
                title: 'Error!',
                text: 'Please fill all the required fields properly!',
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
            signIn({ ...userInfo, appType: 'music' });
        }

    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email<span className="require-field">*</span> : </label>
                <input type="text" name="email" id="email" value={userInfo.email} onChange={handleChange} />

                <label htmlFor="password">Password<span className="require-field">*</span> : </label>
                <input type="password" name="password" id="password" value={userInfo.password} onChange={handleChange} />

                <input type="submit" value="Sign In" />
            </form>
            <p>Not an already registerd user?</p>
            <button className="signup-btn" onClick={() => navigate('/signup')}>Sign Up Here!</button>
        </section>
    )

}