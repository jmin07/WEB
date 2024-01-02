package farmstory.myfarm.config;

//import farmstory.myfarm.config.filter.LoginFilter;
import com.myfarm.config.interceptor.LogInterceptor;
import com.myfarm.config.interceptor.LoginInterceptor;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LogInterceptor())
            .order(1)   // 인터셉터의 호출 순서를 지정한다. 낮을 수록 먼저 호출
            .addPathPatterns("/**")  // 인터셉터를 적용할 URL 패턴을 지정
            .excludePathPatterns("/css/**", "/*.ico", "/error", "/home/**"); // 인터셉터에서 제외할 패턴을 지정


        registry.addInterceptor(new LoginInterceptor())
                .order(2)
                .addPathPatterns("/**")
                .excludePathPatterns("/", "/members/add", "/login", "/logout",
                        "/css/**", "/*.ico", "/error");
    }


    /*@Bean
    public FilterRegistrationBean loginFilter() {
        FilterRegistrationBean<Filter> filterFilterRegistrationBean = new FilterRegistrationBean<>();
        filterFilterRegistrationBean.setFilter(new LoginFilter());
        filterFilterRegistrationBean.setOrder(2);
        filterFilterRegistrationBean.addUrlPatterns("/*");

        return filterFilterRegistrationBean;
    }*/

}