package com.myfarm.config.security;

//import com.myfarm.domain.user.service.CustomOAuth2UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.HeaderWriterLogoutHandler;
import org.springframework.security.web.authentication.logout.HttpStatusReturningLogoutSuccessHandler;
import org.springframework.security.web.firewall.DefaultHttpFirewall;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.security.web.header.writers.ClearSiteDataHeaderWriter;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import java.io.IOException;
import java.util.stream.Stream;

import static org.springframework.security.web.header.writers.ClearSiteDataHeaderWriter.Directive.*;

@Configuration
@EnableWebSecurity
public class WebSecurity {

//    private final CustomOAuth2UserService customOAuth2UserService;

//    public WebSecurity(CustomOAuth2UserService customOAuth2UserService) {
//        this.customOAuth2UserService = customOAuth2UserService;
//    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public HttpFirewall getHttpFirewall() {
        return new DefaultHttpFirewall();
    }

    // 그 외 Security 랑 관련된 설정...
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
            .authorizeHttpRequests(
                authorizeRequests -> authorizeRequests
                        .requestMatchers(new AntPathRequestMatcher("/main/**")).authenticated()
                        .requestMatchers(new AntPathRequestMatcher("/**")).permitAll()
            );
/*            .formLogin(
                formLogin -> formLogin
                    .loginPage("/myfarm/login")
                    .failureUrl("/myfarm/login")
            );*/
//            .formLogin(
//                formLogin -> formLogin
//                    .loginPage("/login")                            // login 페이지
                /*    .usernameParameter("userId")                       // form 의 name 명 userId
                    .passwordParameter("userPassword")                       // form 의 name 명 password
                    .failureUrl("/login")        // 로그인 실패 시, 다시 로그인 페이지로
                    .loginProcessingUrl("/login")*/
//            );
            /*
            .logout(
                logout -> logout
                    .logoutUrl("/logout")
                    .logoutSuccessUrl("/")
                    .addLogoutHandler(new HeaderWriterLogoutHandler(new ClearSiteDataHeaderWriter(ALL)))    // clear cookies, storage, and cache that belong to the owning website
                    .logoutSuccessHandler(new HttpStatusReturningLogoutSuccessHandler(){
                        @Override
                        public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
                            response.sendRedirect("/");
                        }
                    })
            );*/

        return http.build();
    }

}
