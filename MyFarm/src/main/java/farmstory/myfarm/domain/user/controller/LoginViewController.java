package farmstory.myfarm.domain.user.controller;

import farmstory.myfarm.domain.user.dto.LoginForm;
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

//    @GetMapping("/user/login")
//    public String loginView(Model model) {
//        LoginForm loginForm = LoginForm.builder().build();
//        model.addAttribute("loginForm", loginForm);
//        return "homePage/login/loginPage";
//    }

    @GetMapping("/user/join")
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