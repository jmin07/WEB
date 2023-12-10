package farmstory.myfarm.domain.user.dto.validation;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class UserValidation {

    @Email(message = "이메일 형식이 알맞지 않습니다.")
    @NotNull(message = "이메일 입력은 필수 입니다.")
    private String email;

    @Size(message = "최소 6자리 이상이어야 합니다.")
    @NotNull(message = "비멀번호 입력은 필수 입니다.")
    private String password;

    @NotNull(message = "주소 입력은 필수 입니다.")
    private String address;

    private byte[] image;
}
