const mockUser = {
    nickName : 'mockUserRedux',
    post : [],
    Followings : [],
    Followers : [],
    id : 1,
};

export const initialState = {
    isLoggedIn : false, // 로그인 여부
    isLoggingOut : false, // 로그아웃 시도중
    isLoggingIn : false, // 로그인 시도중
    logInErrorReason : '', // 로그인 실패 사유
    isSignedUp : false, // 회원가입 성공
    isSigningUp : false, // 회원가입 시도중
    signUpErrorReason : '', // 회원가입 실패 사유
    me : null, // 내 정보
    followingList : [], //팔로잉 리스트
    followerList : [], // 팔로워 리스트
    userInfo : null, // 남의 정보
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

/**
 *  ## LOG_IN_REQUEST 
 *   -> saga에도 존재
 *      - reducer와 saga는 독립적으로 존재
 *      - 실제로 LOG_IN_REQUEST actio을 dispatch해도 saga에서도 reducer에서도 둘다 잡힌다.
 *      - reducer 는 reducer대로, saga는 saga대로 자신의 일처리 할 수가 있다.
 * 
 */
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

// action create
export const signUpRequestAction = data => ({
    type : SIGN_UP_REQUEST,
    payload : {
        signUpData : data,
    },
});

export const logInRequestAction = data => ({
    type : LOG_IN_REQUEST,
    payload : {
        logInData : data,
    },
});

export const logOutRequestAction = data => ({
    type : LOG_OUT_REQUEST,
});

// reducers
type.split('_')[type.split('_').length-1]
export default ( state = initialState, action ) =>  {
    const { type, payload, error } = action;
    // type.split('_')[type.split('_').length-1]
    switch (type) {
        case SIGN_UP_REQUEST : {
            return {
                ...state,
                isSigningUp : true,
                isSignedUp : false,
                signUpErrorReason : '',
            };
        }
        case SIGN_UP_SUCCESS : {
            return {
                ...state,
                isSignedUp : false,
                isSignedUp : true,
            };
        }
        case SIGN_UP_FAILURE : {
            return {
                ...state,
                isSignedUp : false,
                signUpErrorReason : error
            };
        }

        case LOG_IN_REQUEST : {
            return {
                ...state,
                isLoggedIn : true,
                logInErrorReason : '',
            };
        }
        case LOG_IN_SUCCESS : {
            return {
                ...state,
                isLoggingIn : false,
                isLoggedIn : true,
                me : mockUser,
                isLoading : false,
            }
        }
        case LOG_IN_FAILURE : {
            return {
                ...state,
                isLoggingIn : false,
                isLoggedIn : false,
                logInErrorReason : error,
                me : null,
            }
        }

        case LOG_OUT_REQUEST : {
            return {
                ...state,
                isLoggingOut : true,
            }
        }

        case LOG_OUT_SUCCESS : {
            return {
                ...state,
                isLoggedIn : false,
                isLoggingOut : false,
                me : {},
            }
        }

        case LOG_OUT_FAILURE : {
            return {
                ...state,
                isLoggingOut : false
            }
        }
        default :
            return state;
    }
};
