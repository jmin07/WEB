package farmstory.myfarm.domain.user.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;

@Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class UserVo {

    private String id;
    private String email;
    private String password;
    private String address;
    private byte[] image;
}
