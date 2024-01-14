package com.myfarm.domain.user.dto;

import lombok.*;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

@Data
public class SignInForm {

    @Email(message = "이메일 형식이 알맞지 않습니다.")
    @NotEmpty(message = "이메일 입력은 필수 입니다.")
    private String userEmail;

    @Size(message = "최소 6자리 이상 15자리 이하입니다.", min = 6, max = 15)
    @NotEmpty(message = "비멀번호 입력은 필수 입니다.")
    private String userPassword;
}
