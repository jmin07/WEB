package farmstory.myfarm.error;

import farmstory.myfarm.error.dto.ErrorResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.web.ErrorProperties;
import org.springframework.boot.autoconfigure.web.servlet.error.BasicErrorController;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorViewResolver;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

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
