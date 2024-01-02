package com.myfarm.domain.user.controller;

import com.myfarm.domain.user.dto.Member;
import com.myfarm.domain.user.validation.SignUpValidation;
import com.myfarm.domain.user.service.UserServiceInterface;
import com.myfarm.domain.user.validation.SignInValidation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Slf4j
@Controller
public class UserController {

    /**
     * # PRG
     * POST -> REDIRECT -> GET
     *
     * # forward
     */

    private final static String LOGIN_MEMBER = "MYFARMUSER";
    private final UserServiceInterface loginService;

    public UserController(UserServiceInterface loginService) {
        this.loginService = loginService;
    }


    @PostMapping("/login")
    public String loginPost(
            @Validated @ModelAttribute("UserValidation") SignInValidation signInValidation, BindingResult bindingResult,
            @RequestParam(defaultValue = "/", name = "redirectURL") String redirectURL,
            HttpServletRequest request) {

        // defaultValue 는 파라미터 값이 없는 경우, 들어가는 기본 값 설정임!

        // 01. 로그인 검증
        if (bindingResult.hasErrors()) {
            return "homePage/login/loginPage";
        }

        // 02. 로그인 정보 DB 확인
        Member member = loginService.checkLogin(signInValidation);
        if (member == null) {
            bindingResult.reject("ObjectError", "아이디 또는 비밀번호가 틀렸습니다.");
            return "homePage/login/loginPage";
        }

        // 03. 세션이 없으면 생성
        HttpSession session = request.getSession();
        session.setAttribute(LOGIN_MEMBER, member);

        return "redirect:" + redirectURL;
    }


    @PostMapping("/logout")
    public String logoutPost(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {

        // 01. Session 불러오기
        HttpSession session = request.getSession(false);

        // 02. Session 중 로그인 세션
        Member member = (Member) session.getAttribute(LOGIN_MEMBER);
        if (member != null) {
            session.invalidate();
        }

        return "redirect:/home";
    }

    /**
     * 회원 가입
     * redirectAttributes
     * 1. addAttribute
     * - 주소창에 보이는 정보로 노출되어도 상관 없는 정보를 넘기는데 주로 사용한다.
     * 2. addFlashAttribute
     * - 세션에 저장되어 사용 후 자동 삭제
     * - 성공 실패 여부 메세지와 같이 임시로 사용 되는데 적절하다.
     * - 주소 창에 표시 X
     */
    @PostMapping("/create/user")
    public String createUser(@Validated @ModelAttribute SignUpValidation signUpValidation, BindingResult bindingResult,
                             RedirectAttributes redirectAttributes) {

        // 검증 에러 발생 시, 회원가입 페이지로
        if (bindingResult.hasErrors()) {
            return "homePage/login/joinPage";
        }

        // 회원 가입
        loginService.createUser(signUpValidation);

        // 리다이렉트
        redirectAttributes.addFlashAttribute("userStatus", "new");

        return "redirect:homePage/login/loginPage";
    }

    /**
     * 인증 번호 확인
     */
//    @PostMapping("/")
//    public ResponseEntity verifyAuthNumber(String authNumber) {
//
//        //
//        return
//    }
}
