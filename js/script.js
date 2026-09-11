/* =========================================
   GLOBAL
========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Montserrat", sans-serif;
    background: #111;
    color: #fff;
    line-height: 1.7;
}

a {
    text-decoration: none;
    color: inherit;
}

img {
    width: 100%;
    display: block;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

.section-padding {
    padding: 100px 0;
}


/* =========================================
   NAVBAR
========================================= */

.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

.navbar {
    width: 90%;
    max-width: 1200px;
    margin: auto;

    height: 90px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo a {
    font-family: "Playfair Display", serif;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 2px;
}

.logo span {
    color: #d4af37;
}

.nav-links {
    list-style: none;

    display: flex;
    gap: 35px;
}

.nav-links a {
    font-size: 14px;
    font-weight: 600;
    transition: 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
    color: #d4af37;
}

.nav-button {
    padding: 12px 22px;
    border: 1px solid #d4af37;
    color: #d4af37;

    font-size: 13px;
    font-weight: 600;

    transition: 0.3s;
}

.nav-button:hover {
    background: #d4af37;
    color: #111;
}


/* MOBILE MENU */

.menu-toggle {
    display: none;
    cursor: pointer;
}

.menu-toggle span {
    display: block;
    width: 28px;
    height: 3px;

    background: #fff;

    margin: 5px 0;

    transition: 0.3s;
}


/* =========================================
   HERO
========================================= */

.hero {
    min-height: 100vh;

    background:
        url("../images/hero.jpg")
        center/cover no-repeat;

    position: relative;

    display: flex;
    align-items: center;
}

.hero-overlay {
    position: absolute;
    inset: 0;

    background: rgba(0, 0, 0, 0.65);
}

.hero-content {
    position: relative;
    z-index: 2;

    width: 90%;
    max-width: 1200px;

    margin: auto;
}

.small-title {
    color: #d4af37;

    font-size: 14px;
    font-weight: 600;

    letter-spacing: 4px;

    margin-bottom: 20px;
}

.hero h1 {
    font-family: "Playfair Display", serif;

    font-size: clamp(50px, 7vw, 90px);

    line-height: 1.1;

    margin-bottom: 25px;
}

.hero h1 span {
    color: #d4af37;
}

.hero-content > p:not(.small-title) {
    max-width: 600px;

    color: #ddd;

    margin-bottom: 35px;
}


/* =========================================
   BUTTON
========================================= */

.btn {
    display: inline-block;

    padding: 14px 28px;

    font-size: 13px;
    font-weight: 700;

    letter-spacing: 1px;

    transition: 0.3s;
}

.primary-btn {
    background: #d4af37;
    color: #111;
}

.primary-btn:hover {
    background: #fff;
}

.secondary-btn {
    border: 1px solid #fff;
    color: #fff;

    margin-left: 10px;
}

.secondary-btn:hover {
    background: #fff;
    color: #111;
}


/* =========================================
   SECTION HEADING
========================================= */

.section-heading {
    margin-bottom: 60px;
}

.section-heading p,
.section-label {
    color: #d4af37;

    font-size: 13px;
    font-weight: 700;

    letter-spacing: 3px;

    margin-bottom: 10px;
}

.section-heading h2 {
    font-family: "Playfair Display", serif;

    font-size: 48px;
    line-height: 1.2;
}

.section-heading.center {
    text-align: center;
}

.line {
    width: 60px;
    height: 2px;

    background: #d4af37;

    margin-top: 20px;
}

.center .line {
    margin-left: auto;
    margin-right: auto;
}


/* =========================================
   WELCOME
========================================= */

.welcome {
    background: #151515;
}

.welcome-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 70px;

    align-items: center;
}

.welcome-image img {
    height: 550px;

    object-fit: cover;
}

.welcome-content h3 {
    font-family: "Playfair Display", serif;

    font-size: 35px;

    margin-bottom: 20px;
}

.welcome-content p {
    color: #bbb;

    margin-bottom: 20px;
}

.text-button {
    color: #d4af37;

    font-weight: 600;

    display: inline-block;

    margin-top: 15px;
}


/* =========================================
   FEATURES
========================================= */

.features {
    background: #0d0d0d;

    padding: 70px 0;
}

.features-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 25px;
}

.feature-card {
    text-align: center;

    padding: 20px;
}

.feature-icon {
    font-size: 40px;

    margin-bottom: 15px;
}

.feature-card h3 {
    font-family: "Playfair Display", serif;

    font-size: 23px;

    margin-bottom: 10px;
}

.feature-card p {
    color: #999;

    font-size: 14px;
}


/* =========================================
   POPULAR DRINKS
========================================= */

.popular {
    background: #151515;
}

.drink-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 30px;
}

.drink-card {
    background: #1d1d1d;

    overflow: hidden;
}

.drink-card img {
    height: 300px;

    object-fit: cover;

    transition: 0.5s;
}

.drink-card:hover img {
    transform: scale(1.05);
}

.drink-info {
    padding: 25px;
}

.drink-info h3 {
    font-family: "Playfair Display", serif;

    font-size: 25px;

    margin-bottom: 5px;
}

.drink-info p {
    color: #999;

    font-size: 14px;
}

.drink-info span {
    color: #d4af37;

    font-size: 18px;
    font-weight: 700;

    display: block;

    margin-top: 10px;
}

.center-button {
    text-align: center;

    margin-top: 50px;
}


/* =========================================
   CTA
========================================= */

.cta {
    min-height: 450px;

    background:
        url("../images/hero.jpg")
        center/cover no-repeat;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
}

.cta-overlay {
    position: absolute;
    inset: 0;

    background: rgba(0, 0, 0, 0.7);
}

.cta-content {
    position: relative;
    z-index: 2;
}

.cta-content p {
    color: #d4af37;

    font-size: 13px;
    font-weight: 700;

    letter-spacing: 3px;
}

.cta-content h2 {
    font-family: "Playfair Display", serif;

    font-size: 50px;

    margin: 15px 0 30px;
}


/* =========================================
   FOOTER
========================================= */

.footer {
    background: #080808;

    padding: 70px 0 0;
}

.footer-grid {
    display: grid;

    grid-template-columns:
        2fr 1fr 1.5fr 1.5fr;

    gap: 50px;

    padding-bottom: 50px;
}

.footer-logo {
    font-family: "Playfair Display", serif;

    font-size: 30px;

    margin-bottom: 15px;
}

.footer-logo span {
    color: #d4af37;
}

.footer-column h3 {
    color: #d4af37;

    font-size: 16px;

    margin-bottom: 20px;
}

.footer-column p {
    color: #888;

    font-size: 14px;

    margin-bottom: 10px;
}

.footer-column a {
    display: block;

    color: #888;

    font-size: 14px;

    margin-bottom: 8px;

    transition: 0.3s;
}

.footer-column a:hover {
    color: #d4af37;
}

.social-icons {
    display: flex;

    gap: 10px;

    margin-top: 20px;
}

.social-icons a {
    width: 35px;
    height: 35px;

    border: 1px solid #555;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;

    transition: 0.3s;
}

.social-icons a:hover {
    background: #d4af37;
    color: #111;
}

.copyright {
    border-top: 1px solid #222;

    padding: 25px 0;

    text-align: center;
}

.copyright p {
    color: #666;

    font-size: 13px;
}


/* =========================================
   PAGE HERO
========================================= */

.page-hero {
    height: 450px;

    background:
        linear-gradient(
            rgba(0,0,0,0.7),
            rgba(0,0,0,0.7)
        ),
        url("../images/hero.jpg")
        center/cover no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
}

.page-hero p {
    color: #d4af37;

    font-size: 13px;
    font-weight: 700;

    letter-spacing: 4px;
}

.page-hero h1 {
    font-family: "Playfair Display", serif;

    font-size: 65px;

    margin-top: 10px;
}


/* =========================================
   ABOUT
========================================= */

.about-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 70px;

    align-items: center;
}

.about-main-image {
    height: 600px;

    object-fit: cover;
}

.about-text h2 {
    font-family: "Playfair Display", serif;

    font-size: 48px;

    line-height: 1.2;

    margin-bottom: 20px;
}

.about-text p {
    color: #aaa;

    margin-bottom: 20px;
}


/* =========================================
   STATS
========================================= */

.stats {
    background: #d4af37;

    color: #111;

    padding: 70px 0;
}

.stats-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    text-align: center;
}

.stats h2 {
    font-family: "Playfair Display", serif;

    font-size: 50px;
}

.stats p {
    font-weight: 600;
}


/* =========================================
   VALUES
========================================= */

.values-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 30px;
}

.value-card {
    background: #1a1a1a;

    padding: 40px 30px;

    border-bottom: 2px solid #d4af37;
}

.value-card h3 {
    font-family: "Playfair Display", serif;

    font-size: 25px;

    margin-bottom: 15px;
}

.value-card p {
    color: #999;
}


/* =========================================
   SERVICES
========================================= */

.services-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 30px;
}

.service-card {
    background: #1a1a1a;

    padding: 40px 30px;

    position: relative;

    transition: 0.3s;
}

.service-card:hover {
    transform: translateY(-8px);
}

.service-number {
    position: absolute;

    right: 20px;
    top: 15px;

    color: #333;

    font-size: 50px;
    font-weight: 700;
}

.service-icon {
    font-size: 40px;

    margin-bottom: 15px;
}

.service-card h3 {
    font-family: "Playfair Display", serif;

    font-size: 25px;

    margin-bottom: 15px;
}

.service-card p {
    color: #999;

    font-size: 14px;
}


/* =========================================
   MENU
========================================= */

.menu-section {
    background: #151515;
}

.menu-list {
    max-width: 900px;

    margin: auto;
}

.menu-item {
    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 25px 0;

    border-bottom: 1px solid #333;
}

.menu-item h3 {
    font-family: "Playfair Display", serif;

    font-size: 22px;
}

.menu-item p {
    color: #888;

    font-size: 14px;
}

.menu-item span {
    color: #d4af37;

    font-weight: 700;

    font-size: 18px;
}

.menu-heading {
    margin-top: 100px;
}

.food-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 30px;
}

.food-card {
    background: #1d1d1d;

    overflow: hidden;
}

.food-card img {
    height: 250px;

    object-fit: cover;
}

.food-card div {
    padding: 25px;
}

.food-card h3 {
    font-family: "Playfair Display", serif;

    font-size: 24px;
}

.food-card p {
    color: #999;

    font-size: 14px;

    margin: 8px 0;
}

.food-card strong {
    color: #d4af37;
}


/* =========================================
   CONTACT
========================================= */

.contact-grid {
    display: grid;

    grid-template-columns:
        1fr 1.2fr;

    gap: 70px;
}

.contact-info h2 {
    font-family: "Playfair Display", serif;

    font-size: 45px;

    line-height: 1.2;

    margin-bottom: 20px;
}

.contact-info > p {
    color: #999;

    margin-bottom: 30px;
}

.contact-detail {
    display: flex;

    gap: 20px;

    margin-bottom: 25px;
}

.contact-icon {
    font-size: 25px;
}

.contact-detail h3 {
    font-size: 16px;

    margin-bottom: 3px;
}

.contact-detail p {
    color: #888;

    font-size: 14px;
}


/* FORM */

.contact-form-box {
    background: #1a1a1a;

    padding: 45px;
}

.contact-form-box h2 {
    font-family: "Playfair Display", serif;

    font-size: 35px;
}

.contact-form-box > p {
    color: #888;

    margin-bottom: 30px;
}

.form-row {
    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 20px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;

    font-size: 13px;

    margin-bottom: 7px;

    color: #ccc;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;

    background: #111;

    border: 1px solid #333;

    color: #fff;

    padding: 13px;

    font-family: inherit;

    outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: #d4af37;
}

.form-group textarea {
    resize: vertical;
}

.form-button {
    border: none;

    cursor: pointer;
}

.form-message {
    margin-top: 15px;

    color: #d4af37;

    font-size: 14px;
}


/* =========================================
   MAP
========================================= */

.map-section {
    height: 400px;
}

.map-placeholder {
    height: 100%;

    background:
        linear-gradient(
            rgba(0,0,0,0.75),
            rgba(0,0,0,0.75)
        ),
        url("../images/hero.jpg")
        center/cover no-repeat;

    display: flex;

    align-items: center;
    justify-content: center;

    text-align: center;
}

.map-placeholder h2 {
    font-family: "Playfair Display", serif;

    font-size: 40px;
}

.map-placeholder p {
    color: #aaa;

    margin: 10px 0 25px;
}


/* =========================================
   RESPONSIVE TABLET
========================================= */

@media (max-width: 900px) {

    .nav-button {
        display: none;
    }

    .nav-links {
        position: fixed;

        top: 90px;
        left: -100%;

        width: 100%;
        height: calc(100vh - 90px);

        background: #111;

        flex-direction: column;

        align-items: center;

        justify-content: center;

        gap: 30px;

        transition: 0.4s;
    }

    .nav-links.active {
        left: 0;
    }

    .menu-toggle {
        display: block;
    }

    .welcome-grid,
    .about-grid,
    .contact-grid {
        grid-template-columns: 1fr;
    }

    .features-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .drink-grid,
    .services-grid,
    .food-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .footer-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .stats-grid {
        grid-template-columns:
            repeat(2, 1fr);

        gap: 30px;
    }

}


/* =========================================
   RESPONSIVE MOBILE
========================================= */

@media (max-width: 600px) {

    .section-padding {
        padding: 70px 0;
    }

    .navbar {
        height: 75px;
    }

    .nav-links {
        top: 75px;
        height: calc(100vh - 75px);
    }

    .logo a {
        font-size: 25px;
    }

    .hero {
        min-height: 750px;
    }

    .hero h1 {
        font-size: 48px;
    }

    .hero-content > p:not(.small-title) {
        font-size: 14px;
    }

    .hero-buttons {
        display: flex;

        flex-direction: column;

        align-items: flex-start;

        gap: 12px;
    }

    .secondary-btn {
        margin-left: 0;
    }

    .section-heading h2 {
        font-size: 38px;
    }

    .welcome-image img,
    .about-main-image {
        height: 400px;
    }

    .features-grid,
    .drink-grid,
    .services-grid,
    .food-grid,
    .values-grid,
    .footer-grid,
    .stats-grid {
        grid-template-columns: 1fr;
    }

    .cta-content h2 {
        font-size: 38px;
    }

    .page-hero {
        height: 350px;
    }

    .page-hero h1 {
        font-size: 48px;
    }

    .about-text h2,
    .contact-info h2 {
        font-size: 38px;
    }

    .form-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .contact-form-box {
        padding: 25px 20px;
    }

    .menu-item {
        gap: 20px;
    }

    .menu-item h3 {
        font-size: 19px;
    }

    .menu-item span {
        font-size: 16px;
    }

}