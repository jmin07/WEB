<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="hero-container">
    <div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: hsla(0, 0%, 25%, 0); margin-top: 45px">
        <div class="container">
            <div class="row gx-lg-5 align-items-center justify-content-center">

                <div class="col-lg-6 mb-5 mb-lg-0">
                    <h1 class="my-5 display-3 fw-bold ls-tight">
                        The best offer <br />
                        <span class="text-primary">for your business</span>
                    </h1>
                    <p style="color: hsl(217, 10%, 50.8%)">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                        quibusdam tempora at cupiditate quis eum maiores libero
                        veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>
                </div>

                <div class="col-12 col-md-6 col-xl-5">
                    <div class="card border-0 rounded-4" style="background-color: rgba(255, 255, 255, 0.3)">
                        <div class="card-body p-3 p-md-4 p-xl-5">
                            <div class="row">
                                <div class="col-12">
                                    <div class="mb-4">
                                        <h3 style="text-align: center">LOGIN</h3>
                                    </div>
                                </div>
                            </div>
                            <form action="#!">
                                <div class="row gy-3 overflow-hidden">
                                    <div class="col-12">
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required>
                                            <label for="email" class="form-label">Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating mb-3">
                                            <input type="password" class="form-control" name="password" id="password" value="" placeholder="Password" required>
                                            <label for="password" class="form-label">Password</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me">
                                            <label class="form-check-label text-secondary" for="remember_me">
                                                <label style="color: black">
                                                    아이디 기억하기
                                                </label>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="d-grid">
                                            <button class="btn btn-primary btn-lg" type="submit">LOG IN</button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div class="row">
                                <div class="col-12">
                                    <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                                        <ul class="find_wrap" id="find_wrap">
                                            <li>
                                                <a href="" class="loginBoxA nobar">비밀번호 찾기</a>
                                            </li>
                                            <li>
                                                <a href="" class="loginBoxA">아이디 찾기</a>
                                            </li>
                                            <li>
                                                <a href="/myfarm/join/account" class="loginBoxA">회원 가입</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <p class="mt-4 mb-3 separator" style="text-align: center; font-weight: bold">OR</p>
                                    <div class="d-flex gap-2 gap-sm-3" style="flex-direction: row; justify-content: center">

                                        <button type="button" class="kakao-login-button"></button>
                                        <button type="button" class="naver-login-button"></button>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>