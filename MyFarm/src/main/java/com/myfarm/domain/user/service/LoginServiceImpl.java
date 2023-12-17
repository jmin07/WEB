package com.myfarm.domain.user.service;

import com.myfarm.domain.user.dto.UserVo;

import com.myfarm.domain.user.validation.SignValidation;
import com.myfarm.domain.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class LoginServiceImpl implements LoginServiceInterface {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // 생성자로 주입받을 객체가 빈으로 등록되어 있다면 @Autowired를 생략 할 수 있다.
    public LoginServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Integer createUser(SignValidation signValidation) {

        // 00. 기본 이미지 URL
        // aws s3 적용이 필요.

        // 01. 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(signValidation.getUserPassword());

        // 02. 회원 정보 DB 저장
        UserVo user = UserVo.builder()
                .userNickName(signValidation.getUserNickName())
                .userEmail(signValidation.getUserEmail())
                .userPassword(signValidation.getUserRegion())
                .userPassword(encodedPassword)
                .userImageUrl()
                .build();

        return userRepository.createUser(user);
    }


}
