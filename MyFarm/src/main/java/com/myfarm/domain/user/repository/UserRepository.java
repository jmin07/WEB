package com.myfarm.domain.user.repository;

import com.myfarm.domain.user.dto.Member;
import com.myfarm.domain.user.dto.SignUpForm;
import com.myfarm.domain.user.mapper.UserMapper;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;

@Slf4j
@Transactional(rollbackFor = SQLException.class)
@Repository
public class UserRepository {

    private final UserMapper userMapper;

    public UserRepository(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public Integer createUser(SignUpForm signUpForm) {
        return userMapper.createUser(signUpForm);
    }

    /**
     * 이메일 정보로 유저 조회
     * @param email
     * @return Member
     */
    public Member selectUserByEmail(String email) {
        return userMapper.selectUserByEmail(email);
    }

    /**
     * 패스워드 정보로 유저 조회
     * @param pwd
     * @return Member
     */
    public Member selectUserByPassword(String pwd) {
        return userMapper.selectUserByPassword(pwd);
    }

    /**
     * 이메일과 패스워드 정보로 유저 조회
     * @param email
     * @param pwd
     * @return Member
     */
    public Member selectUserByPwdEmail(String email, String pwd) {
        return userMapper.selectUserByPwdEmail(email, pwd);
    }

}
