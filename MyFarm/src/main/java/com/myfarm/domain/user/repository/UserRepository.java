package com.myfarm.domain.user.repository;

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

    public SignUpForm selectUserByEmail(String email) {
        return userMapper.selectUserByEmail(email);
    }

    public SignUpForm selectUserByPassword(String pwd) {
        return userMapper.selectUserByPassword(pwd);
    }

}
