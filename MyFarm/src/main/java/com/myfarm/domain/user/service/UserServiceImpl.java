package com.myfarm.domain.user.service;

import com.myfarm.domain.user.dto.Member;
import com.myfarm.domain.user.dto.SignUpForm;

import com.myfarm.domain.user.validation.SignUpValidation;
import com.myfarm.domain.user.repository.UserRepository;
import com.myfarm.domain.user.validation.SignInValidation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserServiceImpl implements UserServiceInterface {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // 생성자로 주입받을 객체가 빈으로 등록되어 있다면 @Autowired를 생략 할 수 있다.
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void createUser(SignUpValidation signUpValidation) {

        // 00. 기본 이미지 URL
        // aws s3 적용이 필요.

        // 01. 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(signUpValidation.getUserPassword());

        // 02. 회원 정보 DB 저장
        SignUpForm user = SignUpForm.builder()
                .userNickName(signUpValidation.getUserNickName())
                .userEmail(signUpValidation.getUserEmail())
                .userPassword(signUpValidation.getUserRegion())
                .userPassword(encodedPassword)
                .userImageUrl()
                .build();

        Integer newUser = userRepository.createUser(user);

        if (newUser == null || newUser != 1) {
            throw new RuntimeException("회원가입에 실패했습니다.");
        }
    }

    @Override
    public Member checkLogin(SignInValidation signInValidation) {

        // 아이디 확인
        String userEmail = signInValidation.getEmail();
        SignUpForm userByEmail = userRepository.selectUserByEmail(userEmail);

        // 비밀번호 확인
        String userPwd = signInValidation.getPassword();
        SignUpForm userByPwd = userRepository.selectUserByPassword(userPwd);

        UserVo

        return rtnPage;
    }
}
