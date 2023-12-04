package farmstory.myfarm.domain.user.repository;

import farmstory.myfarm.domain.user.dto.UserVo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.repository.query.Param;

@Mapper
public interface UserRepository {

    UserVo selectUser(@Param("email") String email);

    Integer createUser(@Param("userVo") UserVo uservo);

    Integer updateUser(@Param("userVo") UserVo uservo);

    Integer deleteUser(@Param("email") String email);
}
