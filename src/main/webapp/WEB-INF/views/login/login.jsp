<%@ page language="java" contentType="text/html; charset=UTF-8"%>

<html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Vendor CSS Files -->
        <link href="css/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="css/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
        <link href="css/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
        <link href="css/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
        <link href="css/assets/vendor/remixicon/remixicon.css" rel="stylesheet">
        <link href="css/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

        <!-- Template Main CSS File -->
        <link href="css/assets/css/style.css" rel="stylesheet">

        <title>Document</title>
    </head>
    <body>

        <!-- ======= Header ======= -->
        <header id="header" class="fixed-top ">
            <jsp:include page="../main/header.jsp" flush="false"/>
        </header><!-- End Header -->

        <!-- ======= Hero Section ======= -->
        <section id="hero">
            <jsp:include page="./login_box.jsp" flush="false"/>
        </section><!-- End Hero -->

        <!-- body -->
<%--        <main>--%>
<%--            <div class="login_box">--%>
<%--                <jsp:include page="login_box.jsp" flush="false"/>--%>
<%--            </div>--%>
<%--            <div class="login_text">--%>
<%--                &lt;%&ndash; 글자 나오는 부분&ndash;%&gt;--%>
<%--            </div>--%>
<%--        </main>--%>

<%--        <!-- footer -->--%>
<%--        <footer>--%>
<%--            <div>--%>
<%--                Test--%>
<%--            </div>--%>
<%--        </footer>--%>

    </body>
</html>