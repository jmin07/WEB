package com.myfarm.domain.user.service;

import com.myfarm.domain.user.dto.Member;
import com.myfarm.domain.user.validation.SignUpValidation;
import com.myfarm.domain.user.validation.SignInValidation;

public interface UserServiceInterface {
    // public abstract


    // 회원 가입
    void createUser(SignUpValidation signUpValidation);


    // 로그인
    Member checkLogin(SignInValidation signInValidation);


    // 비밀번호
}
