package farmstory.myfarm.domain.main.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Slf4j
@Controller
public class MainViewController {
    @GetMapping("/main")
    public String mainView() {
        return "main";
    }

    /*@GetMapping("/main")
    public String mainView(@SessionAttribute(name = "test", required = false) Member loginMember, Model model) {

        // 세션에 회원 데이터가 없으면 home
        if (loginMember == null) {
            return "home";
        }

        // 세션이 유지되면 main 페이지로 이동
        model.addAttribute("member", loginMember);
        return "main";
    }*/
}
