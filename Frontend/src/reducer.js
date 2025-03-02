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
        },
        id: ''
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