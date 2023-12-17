package com.myfarm.domain.user.dto;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
public class LoginForm {

    // "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$"
    @Email(message = "이메일 형식이 알맞지 않습니다.")
    @NotEmpty(message = "이메일 입력은 필수 입니다.")
    private String userEmail;

    @Size(message = "최소 6자리 이상이어야 합니다.")
    @NotEmpty(message = "비밀번호 입력은 필수 입니다.")
    private String userPassword;
}
