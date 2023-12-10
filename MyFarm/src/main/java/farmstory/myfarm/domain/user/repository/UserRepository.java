package farmstory.myfarm.domain.user.repository;

import farmstory.myfarm.domain.user.dto.UserVo;
import farmstory.myfarm.domain.user.mapper.UserMapper;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Slf4j
@Repository
public class UserRepository {

    private final UserMapper userMapper;

    public UserRepository(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public UserVo selectUserByEmail(String email) {

        return userMapper.selectUserByEmail(email);
    }

}
