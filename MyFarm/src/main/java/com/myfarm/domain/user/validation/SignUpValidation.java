package com.myfarm.domain.user.validation;

import lombok.Data;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

@Data
public class SignUpValidation {

    @Size(min = 2, max = 6, message = "최소 2자 ~ 최대 6자 이상으로 작성해주세요.")
    @NotEmpty(message = "닉네임은 필수입니다.")
    private String userNickName;

    @Email(message = "이메일 형식이 알맞지 않습니다.")
    @NotEmpty(message = "이메일 입력은 필수입니다.")
    private String userEmail;

    @Size(message = "최소 6자리 이상이어야 합니다.")
    @NotEmpty(message = "비밀번호 입력은 필수입니다.")
    private String userPassword;

    @NotEmpty(message = "지역 설정은 필수입니다.")
    private String userRegion;
}
