<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="hero-container">
    <div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: hsla(0, 0%, 25%, 0); margin-top: 45px; width: 50%; ">
        <div class="container">
            <div class="col-12 col-md-6 col-xl-12">

                <div class="card border-0 rounded-4" style="background-color: rgba(255, 255, 255, 0.3)">

                    <div class="card-body p-3 p-md-4 p-xl-5 h-100">

                        <div class="row">
                            <div class="col-10 mx-auto">
                                <div class="mb-4">
                                    <h3 style="text-align: center">회원가입</h3>
                                </div>
                            </div>
                        </div>

                        <form action="#!">
                            <div class="column overflow-hidden">

                                <div class="row mb-3" style="display: flex; justify-content: center">
                                    <div class="row">
                                        <div class="col-7">
                                            <div class="form-floating">
                                                <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required oninput="setEmail()">
                                                <label for="email" class="form-label">이메일</label>
                                            </div>
                                        </div>

                                        <div class="col-3">
                                            <div class="form-floating d-flex h-100">
                                                <button class="btn btn-primary" type="button" onclick="sendVerificationCode()">인증번호 전송</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-9">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" name="verificationCode" id="verificationCode" placeholder="인증번호" required>
                                            <label for="verificationCode" class="form-label">인증번호</label>
                                        </div>
                                    </div>

                                    <div class="col-3">
                                        <%--                                        <div class="form-floating mb-3">--%>
                                        <button class="btn btn-primary" type="button" onclick="verifyCode()">인증 확인</button>
                                        <%--                                        </div>--%>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-">
                                        <div class="form-floating">
                                            <input type="password" class="form-control" name="password" placeholder="비밀번호" required>
                                            <label for="password" class="form-label">비밀번호</label>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-12">
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" name="passwordCheck" placeholder="비밀번호 확인" required>
                                        <label for="passwordCheck" class="form-label">비밀번호 확인</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-10 d-grid">
                                        <button class="btn btn-primary btn-lg" type="button" onclick="verifyCode()">회원가입</button>
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