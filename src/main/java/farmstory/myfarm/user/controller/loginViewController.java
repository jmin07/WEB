package farmstory.myfarm.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class loginViewController {
    @GetMapping("/")
    public String homeView() { return "home";}

    @GetMapping("/login")
    public String loginView() {
        return "homePage/login/login";
    }

    @GetMapping("/join/account")
    public String createAccountView () {
        return "homePage/login/createAccount";
    }
}