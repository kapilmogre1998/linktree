import React, { useEffect, useState } from 'react'
import MobilePreview from '../Common/MobilePreview/MobilePreview'
import { useParams } from 'react-router-dom'
import { setClickTrackingAPI, getProfileAPI } from './api';
import Loader from '../Common/Loader/Loader';

const Share = () => {
    const param = useParams();
    const [isLoader, setIsLoader] = useState(false);

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
            type: 'teritary'
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

    const setClickTracking = async (data) => {
        try {
            const res = await setClickTrackingAPI({...data, userId: param?.id});
            console.log(res);
        } catch (error) {
            console.log("🚀 ~ setCountTracking ~ error:", error)
        }
    }

    const fetchData = async (userId) => {
        try {
            setIsLoader(true);
            const res = await getProfileAPI(userId);
            if (res?.data?.sts == 1 && res.data?.data) {
                console.log(res)
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
        } finally {
            setIsLoader(false)
        }
    }

    useEffect(() => {
        if (param?.id) {
            fetchData(param.id);
            setClickTracking();
        }
    }, [])

    return (
        <div>
            <MobilePreview {...{ data }} apiCall={true} apiCallback={setClickTracking} shareProfile={true} />
            {isLoader && <Loader />}
        </div>
    )
}

export default Share
