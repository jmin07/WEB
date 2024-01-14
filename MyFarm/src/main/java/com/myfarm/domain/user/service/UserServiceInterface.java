package com.myfarm.domain.user.service;

import com.myfarm.domain.user.dto.Member;
import com.myfarm.domain.user.dto.SignInForm;
import com.myfarm.domain.user.validation.SignUpValidation;

public interface UserServiceInterface {
    // public abstract


    // 회원 가입
    void createUser(SignUpValidation signUpValidation);


    // 로그인
    Member checkLogin(SignInForm signInForm);


    // 비밀번호
}
