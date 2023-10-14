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

        <%@include file="include/homeScript.jsp"%>
    </head>

    <body>

        <!-- ======= Header ======= -->
        <header id="header" class="fixed-top">
            <jsp:include page="homePage/part/header.jsp" flush="false"/>
        </header>
        <!-- End Header -->


        <!-- ======= Hero Section ======= -->
        <section id="hero">
            <jsp:include page="homePage/part/hero.jsp" flush="false"/>
        </section>
        <!-- End Hero -->

        <main id="main">

            <!-- ======= About Section ======= -->
            <section id="about" class="about">
                <jsp:include page="homePage/section/about.jsp" flush="false"/>
            </section>
            <!-- End About Section -->

            <!-- ======= Services Section ======= -->
            <section id="services" class="services">
                <jsp:include page="homePage/section/service.jsp" flush="false"/>
            </section>
            <!-- End Services Section -->


            <!-- ======= Cta Section ======= -->
            <section id="cta" class="cta">
            <div class="container">
                <div class="text-center">
                    <h3>Call To Action</h3>
                    <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <a class="cta-btn" href="#">Call To Action</a>
                </div>
            </div>
            </section>
            <!-- End Cta Section -->

            <!-- ======= Contact Section ======= -->
            <section id="contact" class="contact">
                <jsp:include page="homePage/section/contact.jsp" flush="false"/>
            </section>
            <!-- End Contact Section -->

        </main>

        <!-- ======= Footer ======= -->
        <footer id="footer">
            <jsp:include page="homePage/part/footer.jsp" flush="false"/>
        </footer>
        <!-- End Footer -->

        <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
            <i class="bi bi-arrow-up-short"></i>
        </a>

    </body>

</html>