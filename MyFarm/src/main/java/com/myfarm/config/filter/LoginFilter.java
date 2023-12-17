package com.myfarm.config.filter;

/*
@Slf4j
@Configuration
public class LoginFilter implements Filter {

    private static final String[] whiteList =  {"/", "/home", "logout", "/css/*"};

   */
/* @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String requestURI = httpRequest.getRequestURI();

        HttpServletResponse httpResponse = (HttpServletResponse) response;

        try {
            log.info("인증 체크 필터 시작 {} ", requestURI);

            if (isLoginCheckPath(requestURI)) {
                log.info("인증 체크 로직 실행 {}", requestURI);

                HttpSession session = httpRequest.getSession(false);
                if (session == null || session.getAttribute()) {
                    log.info("미인증 사용자 요청 {}", requestURI);

                    httpResponse.sendRedirect("/login?redirectURL=" + requestURI);
                    return;
                }

            }

            chain.doFilter(request, response);
        } catch (Exception e) {
            throw e;
        } finally {
            log.info("로그인 인증 체크 필터 종료 {}", requestURI);
        }

    }*//*


    */
/**
     * 화이트 리스트의 경우 인증 X
     *//*

    private boolean isLoginCheckPath(String requestURI) {
        return !PatternMatchUtils.simpleMatch(whiteList, requestURI);
    }

}
*/
