package farmstory.myfarm.error.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.lang.Nullable;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ErrorResponseDto {
    private int code;
    private String message;
    private String args;

    protected ErrorResponseDto(int code, String message, @Nullable String args) {
        this.code = code;
        this.message = message;
        this.args = args;
    }

    public static ErrorResponseDto setError(int code, String message, @Nullable String args) {
        return new ErrorResponseDto(code, message, args);
    }

    @Override
    public String toString() {
        return "ErrorResponseDto{" +
                "code=" + code +
                ", message='" + message + '\'' +
                ", args='" + args + '\'' +
                '}';
    }
}
