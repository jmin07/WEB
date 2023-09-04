package com.farmstory.myfarm.user.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

@Controller
public class loginController {

    @GetMapping("/")
    public String homeView() {
        return "index";
    }


    @GetMapping("/login")
    public String loginView() {
        return "/login/login";
    }

    @PostMapping("/login")
    public void loginPost() {

    }
}
