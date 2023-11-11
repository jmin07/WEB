package farmstory.myfarm.user.controller;

import farmstory.myfarm.user.service.LoginServiceInterface;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@Slf4j
@RestController
@RequiredArgsConstructor
public class LoginController {

    /**
     * 1. 세션 생성
     *  - session ID 생성
     *  - 세션 저장소에 session Id와 보관할 값 저장
     *  - session ID로 응답 쿠키를 생성해서 클라이언트에 전달
     * 2. 세션 조회
     *  - 클라이언트가 요청한 session Id 쿠기의 값으로, 세션 저장소에 보관한 값 조회
     * 3. 세션 만료
     *  - 클라이언트가 요청한 session Id 쿠키의 값으로, 세션 저장소에 보관한 session ID와 값 제거
     */

    private final LoginServiceInterface loginService;

    /**
     * 로그인
     */
/*
    @PostMapping("/login")
    public String loginPost(@Valid @ModelAttribute LoginForm form, BindingResult bindingResult,
        HttpServletRequest request, @RequestParam(defaultValue = "/") String redirectURL) {

        if (bindingResult.hasErrors()) {
            return "homePage/login/login";
        }

        // 로그인 성공 처리
        loginService.checkLogin();

        // 세션


        return "redirect:" + redirectURL;
    }

*/

    // 회원 가입 페이지


    /**
     * 로그아웃
     */
    @PostMapping("/logout")
    public void logoutPost() {



    }

    /**
     * 회원 가입
     */
    @PostMapping("")
    public void createUser() {


    }
}
