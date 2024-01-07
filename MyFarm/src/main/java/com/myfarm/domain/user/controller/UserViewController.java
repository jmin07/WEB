package com.myfarm.domain.user.controller;

import com.myfarm.domain.user.dto.Member;
import com.myfarm.domain.user.dto.SignInForm;
import com.myfarm.domain.user.dto.SignUpForm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.SessionAttribute;

@Slf4j
@Controller
public class UserViewController {
    private final static String LOGIN_MEMBER = "MYFARMUSER";

    /**
     * 홈 페이지 View
     */
    @GetMapping("/")
    public String homeView() {
        return "home";
    }

    /**
     * 메인 페이지  View
     */
    @GetMapping("/main")
    public String mainView(
            @SessionAttribute(name = LOGIN_MEMBER, required = false) Member member) {

        if (member == null) {
            return "redirect:/login";
        }

        return "main";
    }


    /**
     * 로그인 페이지 View
     */
    @GetMapping("/login")
    public String loginView(@ModelAttribute("loginForm") SignInForm form) {
        return "/homePage/login/loginPage";
    }

    /**
     * 회원가입 페이지 View
     */
    @GetMapping("/signup")
    public String createAccountView (@ModelAttribute("signUpForm")SignUpForm form) {
        return "homePage/login/joinPage";
    }

    /**
     * 비밀번호 찾는 페이지 View
     */
    @GetMapping("/help?password")
    public String findPasswordView () {
        return "homePage/login/helpPage/pwdPage";
    }

    /**
     * 아이디 찾는 페이지 View
     */
    @GetMapping("/help?id")
    public String findIdView() {
        return "homePage/login/helpPage/idPage";
    }
}