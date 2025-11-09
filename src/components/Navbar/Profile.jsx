import { useEffect, useRef, useState } from "react";
import {ReactComponent as ProfileIcon} from '../../assets/ProfileIcon.svg';
import { useNavigate } from "react-router-dom";

export const Profile = () => {

    const [showModal, setShowModal] = useState(false);

    const profileContainerRef = useRef();

    const navigate = useNavigate();

    useEffect(() => {

        const hideModal = ({target}) => {
            if (profileContainerRef.current.contains(target)) {
                return;
            }

            setShowModal(false);
        }

        document.addEventListener('click', hideModal);

        return () => document.removeEventListener('click', hideModal);

    }, []);

    return (

        <section className="profile-container" onClick={() => setShowModal(!showModal)} ref={profileContainerRef}>
            <section className="profile">
                <ProfileIcon />
            </section>

            {showModal && (<section className="auth-modal" onClick={(event) => event.stopPropagation()}>
                <button className="signin-btn" onClick={() => navigate('/signin')}>Sign In</button>
                {/* <button onClick={() => navigate('/signup')}>Sign Up</button> */}
            </section>)}
        </section>

    )

}