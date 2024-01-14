package com.myfarm.domain.user.mapper;

import com.myfarm.domain.user.dto.Member;
import com.myfarm.domain.user.dto.SignInForm;
import com.myfarm.domain.user.dto.SignUpForm;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.repository.query.Param;

@Mapper
public interface UserMapper {

    Member selectUserByEmail(@Param("email") String email);

    Member selectUserByPassword(@Param("pwd") String pwd);

    Member selectUserByPwdEmail(@Param("signInForm") SignInForm signInForm);

    Integer createUser(@Param("userVo") SignUpForm uservo);

    Integer updateUser(@Param("userVo") SignUpForm uservo);

    Integer deleteUser(@Param("email") String email);


}
