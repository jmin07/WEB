package farmstory.myfarm.domain.error.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

@Slf4j
@Controller
public class ErrorPageHandler implements ErrorController {

    @GetMapping("/error")
    public String errorHandler(HttpServletRequest request, Model model) {

        String HttpStatus = String.valueOf(request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE));
        int status = Integer.parseInt(HttpStatus);

        String response = "";
        if (400 <= status && status < 500) {
            model.addAttribute("status", status);
            response = "/errorPage/4xx";
        } else if (500 <= status && status < 600) {
            model.addAttribute("status", status);
            response = "/errorPage/5xx";
        }

        return response;
    }


    @GetMapping("/error-400")
    public void error400() throws Exception {
        throw new Exception();
    }

}
