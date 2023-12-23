package com.myfarm.domain.user.mapper;

import com.myfarm.domain.user.dto.SignUpForm;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.repository.query.Param;

@Mapper
public interface UserMapper {

    SignUpForm selectUserByEmail(@Param("email") String email);

    SignUpForm selectUserByPassword(@Param("pwd") String pwd);

    Integer createUser(@Param("userVo") SignUpForm uservo);

    Integer updateUser(@Param("userVo") SignUpForm uservo);

    Integer deleteUser(@Param("email") String email);
}
