package com.farmstory.myfarm.main.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class mainViewController {

    @GetMapping("/main")
    public String mainView() {

        return "home";
    }
}
