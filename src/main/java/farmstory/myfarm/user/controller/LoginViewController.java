package farmstory.myfarm.user.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@Controller
public class LoginViewController {
    @GetMapping("/")
    public String homeView() {
        return "home";
    }

    @GetMapping("/login")
    public String loginView() {
        return "homePage/login/loginPage";
    }

    @GetMapping("/join/account")
    public String createAccountView () {
        return "homePage/login/joinPage";
    }

    @GetMapping("/user/help/pwdquery")
    public String findPasswordView () {
        return "homePage/login/helpPage/pwdPage";
    }

    @GetMapping("/user/help/idquery")
    public String findIdView() {
        return "homePage/login/helpPage/idPage";
    }
}