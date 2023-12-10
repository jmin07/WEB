package farmstory.myfarm.domain.user.mapper;

import farmstory.myfarm.domain.user.dto.UserVo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.repository.query.Param;

@Mapper
public interface UserMapper {

    UserVo selectUserByEmail(@Param("email") String email);

    Integer createUser(@Param("userVo") UserVo uservo);

    Integer updateUser(@Param("userVo") UserVo uservo);

    Integer deleteUser(@Param("email") String email);
}
