import React, { useEffect, useRef, useState } from 'react'
import { MdAddAPhoto } from "react-icons/md";
import SparkIcon from '../../../assets/spark-icon.svg';
import { getLinkTreeAPI } from '../../AddLinks/api';
import { toast, ToastContainer } from 'react-toastify';
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import useOutsideClick from '../../Hooks/useOutSideClick';

const MobileHeader = ({ data }) => {
    const ref = useRef()
    const [logout, setLogout] = useState(false)
    const navigate = useNavigate()

    useOutsideClick(ref, () => setLogout(false))

    const handleLogout = () => {
        localStorage.clear();
        navigate('/')
    }

    return (
        <div className='mobile-header-container' >
            <div className='mobile-icon' >
                <img src={SparkIcon} width='30px' height='30px' alt="spark-icon" />
                <div className='spark-trade-mark-container' >SPARK <span className='trade-mark' >TM</span> </div>
            </div>
            <div className={`logout-container`} onClick={() => setLogout(true)} >
                {
                    data?.profile?.pic ?
                        <img src={data.profile.pic} alt="Profile" className="mobile-header-image" /> :
                        <div className='mobile-header-image no-img' ><MdAddAPhoto style={{ width: '50px', height: '50px' }} /></div>
                }
                <div ref={ref} className={`logout-btn  ${logout ? 'active' : ''}`} onClick={handleLogout} ><CiLogout /> Log out</div>
            </div>

        </div>
        // <ToastContainer />
    )
}

export default MobileHeader
