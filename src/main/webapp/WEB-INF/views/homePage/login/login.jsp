<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">

        <title>Tempo Bootstrap Template - Index</title>

        <!-- Favicons -->
        <link href="css/assets/img/favicon.png" rel="icon">
        <link href="css/assets/img/apple-touch-icon.png" rel="apple-touch-icon">

        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

        <!-- css && js files -->
        <%@include file="../../include/homeScript.jsp"%>
    </head>

    <body>

        <!-- ======= Header ======= -->
        <header id="header" class="fixed-top">
            <jsp:include page="part/login_header.jsp" flush="false"/>
        </header>

        <!-- ======= main ======= -->
        <section id="hero">
            <jsp:include page="part/login_box.jsp" flush="false"/>
        </section>

    </body>
</html>