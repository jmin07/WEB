package com.farmstory.myfarm.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class loginViewController {

    @GetMapping("/")
    public String homeView() {
        return "index";
    }

    @GetMapping("/user/login")
    public String loginView() {
        return "login";
    }

    @GetMapping("/user/creat_account")
    public String createAccountView () {
        return "/login/createAccount";
    }
}