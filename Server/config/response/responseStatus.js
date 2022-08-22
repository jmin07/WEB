module.exports = {
    // Success
    REQUEST_SUCCESS: {
        isSuccess: true,
        code: 1000,
        message: "요청에 성공했습니다.",
    },

    // SignUp Success
    SIGNUP_SUCCESS: {
        isSuccess: true,
        code: 2000,
        message: "회원가입에 성공했습니다",
    },

    // SignUp Error
    SIGNUP_ERROR: {
        isSuccess: false,
        code: 2100,
        message: "회원가입에 실패했습니다.",
    },
    SIGNUP_EMAIL_ERROR: {
        isSuccess: false,
        code: 2200,
        message: "이미 가입된 이메일입니다.",
    },
    SIGNUP_CONFIRM_NUMBER_ERROR: {
        isSuccess: false,
        code: 2300,
        message: "인증번호가 일치하지 않습니다.",
    },
    SIGNUP_PASSWORD_ERROR: {
        isSuccess: false,
        code: 2400,
        message: "비밀번호가 일치하지 않습니다.",
    },
    // ----------  로그인 상태  --------------
    SIGNIN_SUCCESS: {
        isSuccess: true,
        code: 2500,
        message: "로그인에 성공했습니다",
    },
    // SignIn Error
    SIGNIN_ERROR: {
        isSuccess: false,
        code: 2600,
        message: "로그인에 실패했습니다.",
    },
    SIGNIN_PASSWORD_ERROR: {
        isSuccess: false,
        code: 2700,
        message: "패스워드 오류입니다.",
    },
    SIGNIN_EMAIL_ERROR: {
        isSuccess: false,
        code: 2800,
        message: "이메일 오류입니다.",
    },
    SIGNIN_PASSWORD_EMAIL_ERROR: {
        isSuccess: false,
        code: 2900,
        message: "아이디 및 비밀번호가 일치하지 않습니다.",
    },
    SIGNIN_STATUS_ERROR: {
        isSuccess: false,
        code: 3000,
        message: "계정이 삭제 되었습니다.",
    },

    IS_LOGGEDIN: {
        isSuccess: false,
        code: 3200,
        message: "로그인한 상태입니다.",
    },
    IS_NOT_LOGGEDIN: {
        isSuccess: false,
        code: 3300,
        message: "로그인이 필요합니다.",
    },
    // ----------------- 로그아웃 ----------------------
    IS_LOGGED_OUT: {
        isSuccess: true,
        code: 3400,
        message: "로그아웃이 되었습니다.",
    },

    // ----------------- 회원 인증 -------------------
    EXIST_EMAIL_SUCCESS: {
        isSuccess: true,
        code: 3000,
        message: "이메일 인증이 되었습니다.",
    },
    EXIST_EMAIL_ERROR: {
        isSuccess: false,
        code: 3000,
        message: "이메일 인증이 실패했습니다.",
    },

    // ----------------- 이메일 발송 ----------------
    SEND_NUMBER_MAIL: {
        isSuccess: true,
        code: 3100,
        message: "입력하신 이메일로 인증번호가 전송되었습니다!",
    },
    SEND_EMAIL_ERROR: {
        isSuccess: false,
        code: 3300,
        message: "입력하신 이메일이 존재하지 않습니다!",
    },

    // ------------------ 회원정보 수정 ----------------
    CHANGE_USER_PASSWORD_SUCCESS: {
        isSuccess: true,
        code: 4000,
        message: "비밀번호가 변경되었습니다.",
    },
    CHANGE_USER_PASSWORD_ERROR: {
        isSuccess: true,
        code: 4000,
        message: "비밀번호가 변경되지 않았습니다.",
    },

    // ------------------ 검색 조회 성공 ----------------
    SEARCH_ITEM_SUCCESS: {
        isSuccess: true,
        code: 4200,
        message: "제품 검색 요청이 성공했습니다.",
    },
    SEARCH_ITEM_FAILURE: {
        isSuccess: false,
        code: 4300,
        message: "검색한 제품의 결과가 없습니다.",
    },
    // ----------------- 에러 발생 ---------------
    SERVICE_ERROR_MESSAGE: {
        isSuccess: false,
        code: 4000,
        message: "잘못된 요청입니다.",
    },
    DAO_ERROR_MESSAGE: {
        isSuccess: false,
        code: 4000,
        message: "쿼리 오류가 발생했습니다.",
    },
    PROVIDER_ERROR_MESSAGE: {
        isSuccess: false,
        code: 4000,
        message: "mysql connection 오류 입니다.",
    },
    CONTROLLER_ERROR_MESSAGE: {
        isSuccess: false,
        cdoe: 4000,
        message: "Controller 에러 입니다.",
    },
};
