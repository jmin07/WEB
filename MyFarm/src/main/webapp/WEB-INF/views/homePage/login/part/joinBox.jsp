<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<div class="hero-container">
    <div class="px-4 py-5 px-md-4 text-center text-lg-start" style=" margin-top: 45px; width: 33%;">



        <div class="container">
            <div class="col-12 col-md-6 col-xl-12">
                <div class="card border-0 rounded-4" style="background-color: rgba(255, 255, 255, 0.1); border: 3px" >
                    <div class="card-body p-3 p-md-4 p-xl-5">

                        <form>

                            <div class="row">
                                <div class="col-12 mx-auto">
                                    <div class="mb-3">
                                        <h3 style="text-align: center">회원 가입</h3>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="staticEmail" class="col-4 col-form-label" style="color: #fff">이메일</label>
                                <div class="row">
                                    <div class="col-8">
                                        <input type="email" class="form-control" id="staticEmail" aria-describedby="emailHelp" placeholder="Email">
                                    </div>
                                    <div class="col-4">
                                        <button type="submit" class="btn btn-primary mb-2">인증번호 전송</button>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="AuthNumber" class="col-4 col-form-label" style="color: #fff">인증번호</label>
                                <div class="row">
                                    <div class="col-8">
                                        <input type="text" class="form-control" id="AuthNumber" placeholder="인증번호">
                                    </div>
                                    <div class="col-4">
                                        <button type="submit" class="btn btn-primary mb-2">인증번호 확인</button>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mb-3">
                                <label for="inputPassword1" class="col-4 col-form-label" style="color: #fff">비밀번호</label>
                                <div class="col-12">
                                    <input type="password" class="form-control" id="inputPassword1" placeholder="Password">
                                </div>
                            </div>

                            <div class="form-group mb-4">
                                <label for="inputPassword2" class="col-4 col-form-label" style="color: #fff">비밀번호 확인</label>
                                <div class="col-12">
                                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
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
                                        <p class="mt-3 mb-3 separator" style="text-align: center; font-weight: bold">OR</p>
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
        </div>
    </div>
</div>

