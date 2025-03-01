import profilePic from './assets/dummy-pic.png';
import { SET_MOBILE_PREVIEW } from './constant';

const mobilePreviewInitialState = {
    mobilePreviewData: {
        profile: {
            pic: profilePic,
            title: '',
            bio: ''
        },
        links: [],
        shops: [],
        bannerBgClr: "#342b26",
        layout: '',
        buttons: {
            color: '',
            fontColor: '',
            buttonType: ''
        },
        fonts: {
            fontType: '',
            color: '#ffffff'
        },
        theme: ''
    }
}

const mobilePreviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOBILE_PREVIEW:
            return {
                ...state,
                mobilePreviewData: action.payload
            }
        default:
            return state
    }
}

export { mobilePreviewReducer, mobilePreviewInitialState }