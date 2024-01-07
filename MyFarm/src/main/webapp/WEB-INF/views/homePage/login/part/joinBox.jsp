<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>


<div class="custom-container">
<%--    <div class="" >--%>

        <div style="width: 29%;">
            <div class="text-center">
                <a href="/myfarm" class="display-4 fw-bold" style="color: #fff; font-size: xxx-large; text-decoration-line: none;">MYFARM</a>
                <p class="fw-bold" style="color: #fff">
                    MYFARM은 농작물 관리를 도와주는 사이트입니다.
                </p>
            </div>
            <div class="card" id="join-box">
                <div class="card-body">
                   <%-- <div>
                        <p class="fw-bold" style="color: #fff">
                        </p>
                    </div>--%>
                    <form>
                        <label for="nickName" class="form-label mt-2" style="color: #fff;">닉네임</label>
                        <div class="mb-4 input-box">
                            <input type="text" class="custom-form-control" id="nickName" placeholder="닉네임 입력" required>
                        </div>

                        <label for="email" class="form-label" style="color: #fff">이메일</label>
                        <div class="mb-4 input-box">
                            <input type="email" class="custom-form-control" id="email" placeholder="이메일 주소 입력" required>
                        </div>

                        <label for="certificationNumber" class="form-label" style="color: #fff">인증번호</label>
                        <div class="mb-4 row">
                            <div class="col-md-8">
                                <input type="text" class="custom-form-control" id="certificationNumber" placeholder="이메일로 전송됩니다." style="border-bottom: 2px solid #ccc; color: #fff" required>
                            </div>
                            <div class="col-md-4" style="padding-top: 3px; width: auto">
                                <button type="button" class="btn btn-primary" id="sendCertificationNumber">인증요청</button>
                            </div>
                        </div>

                        <label for="password" class="form-label" style="color: #fff">비밀번호</label>
                        <div class="mb-4 input-box">
                            <input type="password" class="custom-form-control" id="password" placeholder="비밀번호 입력" required>
                        </div>

                        <label for="checkPassword" class="form-label" style="color: #fff">비밀번호 확인</label>
                        <div class="mb-4 input-box">
                            <input type="password" class="custom-form-control" id="checkPassword" placeholder="비밀번호 입력" required>
                        </div>

                        <button type="submit" class="btn btn-primary btn-lg w-100 mb-3 mt-3 fw-bold">
                            회원 가입
                        </button>

                    </form>
                </div>
            </div>
        </div>


        <!--div class="container">
            <div class="col-12 col-md-6 col-xl-12">
                <div class="card border-0 rounded-4" style="background-color: rgba(255, 255, 255, 0.1); border: 3px" >
                    <div class="card-body p-3 p-md-4 p-xl-5">

                        <form>

                            <div class="row">
                                <div class="col-12 mx-auto">
                                    <div class="mb-4 input-box">
                                        <h3 style="text-align: center">회원 가입</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mb-4">
                                <label for="staticEmail" class="col-4 col-form-label" style="color: #fff">이메일</label>
                                <div class="row">
                                    <div class="col-8">
                                        <input type="email" class="custom-form-control" id="staticEmail" aria-describedby="emailHelp" placeholder="Email">
                                    </div>
                                    <div class="col-4">
                                        <button type="submit" class="btn btn-primary mb-2">인증번호 전송</button>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mb-4">
                                <label for="AuthNumber" class="col-4 col-form-label" style="color: #fff">인증번호</label>
                                <div class="row">
                                    <div class="col-8">
                                        <input type="text" class="custom-form-control" id="AuthNumber" placeholder="인증번호">
                                    </div>
                                    <div class="col-4">
                                        <button type="submit" class="btn btn-primary mb-2">인증번호 확인</button>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mb-4">
                                <label for="inputPassword1" class="col-4 col-form-label" style="color: #fff">비밀번호</label>
                                <div class="col-12">
                                    <input type="password" class="custom-form-control" id="inputPassword1" placeholder="Password">
                                </div>
                            </div>

                            <div class="form-group mb-4">
                                <label for="inputPassword2" class="col-4 col-form-label" style="color: #fff">비밀번호 확인</label>
                                <div class="col-12">
                                    <input type="password" class="custom-form-control" id="inputPassword2" placeholder="Password">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="d-flex gap-2 gap-sm-3" style="flex-direction: row; justify-content: center">
                                            <button type="submit" class="join-button btn btn-primary mb-2">회원가입</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group md-3">
                                <div class="row">
                                    <div class="col-12">
                                        <p class="mt-3 mb-4 separator" style="text-align: center; font-weight: bold">OR</p>
                                        <div class="d-flex gap-2 gap-sm-3" style="flex-direction: row; justify-content: center">

                                            <button type="button" class="kakao-login-button"></button>
                                            <button type="button" class="naver-login-button"></button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div -->

<%--    </div>--%>
</div>
