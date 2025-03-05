import React, { useEffect, useRef, useState } from 'react'
import { MdAddAPhoto } from "react-icons/md";
import SparkIcon from '../../../assets/spark-icon.svg';
import { getLinkTreeAPI } from '../../AddLinks/api';
import { toast, ToastContainer } from 'react-toastify';
import { CiLogout } from "react-icons/ci";
import { referenceLineClasses } from '@mui/x-charts';
import { useNavigate } from 'react-router-dom';
import useOutsideClick from '../../Hooks/useOutSideClick';

const MobileHeader = () => {
    const ref = useRef()
    const [logout, setLogout] = useState(false)
    const navigate = useNavigate()
    const [data, setData] = useState({
        profile: {
            pic: '',
            title: '',
            bio: ''
        },
        links: [],
        shops: [],
        bannerBgClr: "#342b26",
        layout: 'Stack',
        buttons: {
            option: 'Fill',
            color: '#888888',
            fontColor: '#888888',
            index: 2,
            type: 'Teritary'
        },
        fonts: {
            fontType: 'Sans-serif',
            color: '#FFFFFF'
        },
        theme: {
            name: 'Air_Snow',
            background: 'white',
        }
    })

    useOutsideClick(ref, () => setLogout(false))

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('user_data'))?.id;
        if (userId) {
            fetchData(userId);
        }
    }, [])

    const fetchData = async (userId) => {
        try {
            const res = await getLinkTreeAPI(userId);
            if (res?.data?.sts == 1 && res.data?.data) {
                const modifiedData = {
                    ...res.data.data,
                    id: res.data.data._id
                }

                delete modifiedData._id;
                delete modifiedData.__v;
                delete modifiedData.userId;

                setData(modifiedData);
            }
        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error)
            if (error?.response?.data?.msg) {
                toast.error(error.response.data.msg);
            }
        }
    }

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
