package com.myfarm.domain.user.validation;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class SignInValidation {

    @Email(message = "이메일 형식이 알맞지 않습니다.")
    @NotEmpty(message = "이메일 입력은 필수 입니다.")
    private String email;

    @Size(message = "최소 6자리 이상이어야 합니다.")
    @NotEmpty(message = "비멀번호 입력은 필수 입니다.")
    private String password;
}
