import { createPortal } from "react-dom";
import { useUserLoginModal } from "../../Provider/UserLoginModalProvider";
import { useEffect } from "react";
import style from "./UserLoginModal.module.css";
import { useNavigate } from "react-router-dom";

export const UserLoginModal = () => {
    const navigate = useNavigate();
    const {showUserLoginModal, setShowUserLoginModal, musicInterval, setMusicInterval} = useUserLoginModal();

    useEffect(() => {
        clearInterval(musicInterval); 
        setMusicInterval(null);

        if (showUserLoginModal) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showUserLoginModal]);


    if(!showUserLoginModal) {
        return <></>;
    }

    return createPortal((
        <div className={style.modalWrapper}>
            <div className={style.modalContainer}>
                <h3>Sign In to Enjoy the Full Songs!</h3>
                <button className="signin-btn" style={{ width: '10rem' }} onClick={() => { navigate('/signin'); setShowUserLoginModal(false); }}>Sign In</button>
            </div>
            <button className={style.closeModal} onClick={() => { setShowUserLoginModal(false); }}>X</button>
        </div>
    ), document.getElementById('userLoginModal'));

}