package com.myfarm.domain.user.repository;

import com.myfarm.domain.user.dto.UserVo;
import com.myfarm.domain.user.mapper.UserMapper;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;

@Slf4j
@Repository
public class UserRepository {

    private final UserMapper userMapper;

    public UserRepository(UserMapper userMapper) {
        this.userMapper = userMapper;
    }


    public Integer createUser(UserVo userVo) {
        Integer result;

        try {
            result = userMapper.createUser(userVo);
        } catch (SQLException error) {
            return new 커스텀예외클래스()
        }

        return result;
    }


    public UserVo selectUserByEmail(String email) {

        return userMapper.selectUserByEmail(email);
    }

}
