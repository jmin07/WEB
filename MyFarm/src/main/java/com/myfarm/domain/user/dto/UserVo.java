package com.myfarm.domain.user.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Getter
@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class UserVo {

    private String userNickName;
    private String userEmail;
    private String userPassword;
    private String userRegion;
    private String userImageUrl;
}
