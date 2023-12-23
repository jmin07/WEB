package com.myfarm.config.interceptor;

import com.myfarm.domain.user.dto.Member;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.UUID;

@Slf4j
public class LoginInterceptor implements HandlerInterceptor {

    private final static String LOGIN_MEMBER = "MYFARMUSER";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // preHandle 는 컨트롤러 호출 전에 호출된다.

        String requestURI = request.getRequestURI();

        HttpSession session = request.getSession(false);
        Member member = (Member) session.getAttribute(LOGIN_MEMBER);
        if (member == null || session == null) {
            response.sendRedirect("/login?redirectURL=" + requestURI);
            return false;
        }

        return true;
    }
}
