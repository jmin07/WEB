package farmstory.myfarm.domain.error.controller;

import farmstory.myfarm.domain.error.dto.ErrorResponseDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.sql.SQLException;


@ControllerAdvice
public class GlobalExceptionHandler {

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @ExceptionHandler(SQLException.class)
    protected ResponseEntity<ErrorResponseDto> handlerSQLException(SQLException sqlE) {
        logger.error("[handlerSQLException] Error >>> " + sqlE);
        final ErrorResponseDto response = ErrorResponseDto.setError(sqlE.getErrorCode(), sqlE.getMessage(), sqlE.getSQLState());

        // return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        return ResponseEntity.internalServerError().body(response);
    }

    /*
    @ExceptionHandler(Exception.class)
    protected ResponseEntity<ErrorResponseDto> handlerException(Exception error) {
        logger.error("[handlerSQLException] Error >>> " + error);

        return ResponseEntity.internalServerError().body(response);
    }
    */
}
