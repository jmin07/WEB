package farmstory.myfarm.validation;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class UserValidator implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return ;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}