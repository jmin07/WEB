<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Welcome to FarmTown</title>
    <meta content="" name="description">
    <meta content="TEST" name="keywords">

    <!-- Favicons -->
    <link href="/img/favicon.png" rel="icon">
    <link href="/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link href="/css/login.css" rel="stylesheet">

    <style>
        /* [html, body 영역 스타일 지정] */
        *{
            padding: 0;
            margin: 0;
            border: none;
        }

        /*body {*/
        /*    font-family: "Open Sans", sans-serif;*/
        /*    background-image: url("/img/background.jpg");*/
        /*    background-size: contain;*/
        /*}*/

    </style>
</head>
<body>

<%--    <div class="col w-50 img_div">
    </div>
    <div class="d-flex flex-column w-40 justify-content-center align-items-center right">
        <div class="d-flex logo justify-content-center align-items-center">
            <img src="/img/logo.png" alt="" style="margin-right: 6px;">
            <b>FarmTown</b>
        </div>
        <div class="d-flex flex-column login-wrapper justify-content-center shadow">
            <h2>Login</h2>
            <form method="post" id="login-form" action="/login"> <!-- Replace "/login" with the appropriate login endpoint -->
                <input type="text" id="userName" name="userName" placeholder="Email">
                <input type="password" id="userPassword" name="userPassword" placeholder="Password">
                <label for="remember-check">
                    <input type="checkbox" id="remember-check" name="remember-check"> 아이디 저장하기
                </label>
                <input type="button" class="site_login" value="로그인" onclick="submitLoginForm()">
                <div class="login_or">또는</div>
                <input type="button" class="kakao_login" value="카카오톡 로그인" onclick="kakaoLogin()">
                <input type="button" class="google_login" value="구글 로그인" onclick="googleLogin()">
            </form>
            <div class="info_user">
                <a href="/signup">회원가입</a> <!-- Replace "/signup" with the appropriate signup page URL -->
                <ul class="list_user">
                    <li>
                        <a href="/find-account" class="link_user">계정 찾기</a> <!-- Replace "/find-account" with the appropriate account recovery page URL -->
                    </li>
                    <li>
                        <a href="/forgot-password" class="link_user">비밀번호 찾기</a> <!-- Replace "/forgot-password" with the appropriate forgot password page URL -->
                    </li>
                </ul>
            </div>
        </div>
    </div>--%>
</div>
<script>

    // 로그인 버튼
    function signinButton(){
        $("loginForm").attr('action', '/farmtown/signin.os').submit();
    }

    // 회원가입 버튼
    function signupButton() {
        $.ajax({
            url: "http://localhost:8090/farmtown/signup",
            contentType: "application/json; charset=UTF-8",
            type: "post",
            data: JSON.stringify({
                signupId: $("#signupId").val(),
                signupPassword: $("#signupPassword").val(),
                signupCheckPassword: $("#signupCheckPassword").val(),
            }),
            success: () => {
                alert("회원가입에 성공했습니다");
            },
            error: (error) => {
                console.log(error)
                alert("로그인에 실패했습니다.")
            }
        })
    }
</script>
</body>
</html>
