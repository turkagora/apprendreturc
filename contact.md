---
layout: default
---
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact - ApprendreTurc</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  
  <style>
    /* Global Variables and Base Styles */
    :root {
      --primary-color: #6e48aa;
      --secondary-color: #9d50bb;
      --text-dark: #333;
      --text-light: #555;
      --bg-light: #f9f9f9;
      --bg-white: #ffffff;
      --shadow-light: rgba(0,0,0,0.05);
      --shadow-medium: rgba(0,0,0,0.1);
      --shadow-heavy: rgba(0,0,0,0.15);
      --border-radius: 10px;
    }

    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: var(--text-dark);
      line-height: 1.6;
      background-color: #f0f2f5; /* A subtle background to make elements pop */
      position: relative;
      overflow-x: hidden;
    }

    /* Animated Background Elements (from homepage) */
    .bg-elements {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;
    }

    .circle {
      position: absolute;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      opacity: 0.7;
    }

    .circle-1 {
      width: 150px;
      height: 150px;
      top: 10%;
      left: -5%;
      animation: moveCircle 15s infinite alternate ease-in-out;
    }

    .circle-2 {
      width: 200px;
      height: 200px;
      bottom: 5%;
      right: -10%;
      animation: moveCircle 20s infinite alternate-reverse ease-in-out;
    }

    .circle-3 {
      width: 100px;
      height: 100px;
      top: 50%;
      left: 20%;
      animation: moveCircle 10s infinite alternate ease-in-out;
    }

    @keyframes moveCircle {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(20px, 30px);
      }
    }

    /* General Section Styles (from homepage.css) */
    section {
      padding: 4rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-header h2 {
      font-family: 'Playfair Display', serif;
      font-size: 2.5rem;
      color: var(--text-dark);
      margin-bottom: 0.75rem;
    }

    .section-header p {
      font-size: 1.1rem;
      color: var(--text-light);
      max-width: 700px;
      margin: 0 auto;
    }

    /* Buttons (from homepage.css - example, not present in this HTML but good to have if needed) */
    .btn {
      display: inline-block;
      padding: 0.8rem 2rem;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      text-align: center;
    }

    .primary-btn {
      background: var(--primary-color);
      color: white;
      border: 2px solid var(--primary-color);
    }

    .primary-btn:hover {
      background: var(--secondary-color);
      border-color: var(--secondary-color);
      transform: translateY(-2px);
    }

    .secondary-btn {
      background: transparent;
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
    }

    .secondary-btn:hover {
      background: var(--primary-color);
      color: white;
      transform: translateY(-2px);
    }

    /* Footer Styles (from homepage.css) */
    .main-footer {
      background: var(--text-dark); /* Dark background for footer */
      color: white;
      padding: 3rem 2rem;
      font-size: 0.95rem;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-brand p {
      max-width: 250px;
      margin-bottom: 1rem;
    }

    .footer-links h4,
    .footer-contact h4 {
      color: var(--primary-color);
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }

    .footer-links ul,
    .footer-contact ul {
      list-style: none;
      padding: 0;
    }

    .footer-links ul li,
    .footer-contact ul li {
      margin-bottom: 0.7rem;
    }

    .footer-links ul li a,
    .footer-contact ul li {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links ul li a:hover {
      color: var(--secondary-color);
    }

    .footer-contact ul li i {
      margin-right: 0.5rem;
      color: var(--primary-color);
    }

    .footer-bottom {
      text-align: center;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .legal-links a {
      color: white;
      text-decoration: none;
      margin: 0 1rem;
      transition: color 0.3s ease;
    }

    .legal-links a:hover {
      color: var(--primary-color);
    }

    /* Social Links (shared style) */
    .social-links a {
      color: white;
      font-size: 1.5rem;
      margin-right: 1rem;
      transition: color 0.3s ease, transform 0.3s ease;
    }

    .social-links a:hover {
      color: var(--primary-color);
      transform: translateY(-2px);
    }

    /* --- Contact Page Specific Styles --- */

    /* Hero Section */
    .contact-hero {
      background: linear-gradient(135deg, #6e48aa 0%, #9d50bb 100%);
      color: white;
      /* Adjusted padding to make the banner less tall */
      padding: 3.5rem 2rem; /* Reduced from 5rem */
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: auto; /* Removed fixed min-height for more flexibility with padding */
    }

    .contact-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: 3.2rem; /* Slightly reduced font size for banner */
      margin-bottom: 1rem; /* Reduced margin */
      letter-spacing: 0.05rem;
    }

    .contact-hero .intro-text {
      font-size: 1.25rem; /* Slightly reduced font size */
      max-width: 700px; /* Adjusted max-width */
      margin: 0 auto;
      line-height: 1.6;
      opacity: 0.9;
    }
    
    /* Main Content Area */
    .contact-main {
        padding: 4rem 2rem;
        background-color: #f0f2f5;
    }

    /* Adjusted for single column */
    .contact-container {
      max-width: 800px; /* Adjusted max-width since it's a single column now */
      margin: 0 auto;
      padding: 0;
      display: block; /* Changed from grid to block as it's a single element */
      /* gap removed as it's not a grid */
      /* align-items removed */
    }

    /* Contact Form Container (now the primary element in main) */
    .contact-form {
      background: #fff;
      padding: 2.5rem;
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      /* No hover for contact-info anymore */
    }

    .contact-form:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.12);
    }

    .contact-form h2 {
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      color: #333;
      margin-bottom: 2rem;
      text-align: center;
    }

    /* Google Form Embed */
.contact-form iframe {
  width: 100%;
  height: 1100px; /* Try with a larger height */
  border: none;
  border-radius: 8px;
  overflow: hidden;
}


    /* FAQ Section */
    .faq-section {
        padding: 4rem 2rem;
        max-width: 1200px;
        margin: 3rem auto 4rem auto;
        background-color: white;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.05);
    }

    .faq-section h2 {
      font-family: 'Playfair Display', serif;
      text-align: center;
      margin-bottom: 2.5rem;
      font-size: 2.4rem;
      color: #333;
    }

    .faq-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.8rem;
    }

    .faq-item {
      background: #f9f9f9;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .faq-item:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    }

    .faq-item h3 {
      color: var(--primary-color);
      margin-bottom: 0.8rem;
      font-size: 1.15rem;
      line-height: 1.4;
    }

    .faq-item p {
      font-size: 1rem;
      color: #555;
      line-height: 1.6;
    }

    /* Responsive Adjustments */
    @media (max-width: 768px) {
      /* contact-container is already 1 column, so no change needed here */
      /* .contact-container {
        grid-template-columns: 1fr;
      } */

      .contact-hero h1 {
        font-size: 2.5rem; /* Adjusted for smaller screens */
      }
      .contact-hero .intro-text {
        font-size: 1.05rem; /* Adjusted for smaller screens */
      }

      .contact-form {
        padding: 1.8rem;
      }
      .contact-form h2 {
        font-size: 1.8rem;
      }
      
      .faq-grid {
        grid-template-columns: 1fr;
      }
      .faq-section h2 {
        font-size: 2rem;
      }

      /* Adjust footer for smaller screens */
      .footer-container {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .footer-brand, .footer-links, .footer-contact {
        margin-bottom: 1.5rem;
      }
      .footer-brand p {
        margin-left: auto;
        margin-right: auto;
      }
      .footer-contact ul {
        display: inline-block;
        text-align: left;
      }
      .legal-links a {
        display: block;
        margin: 0.5rem 0;
      }
    }
  </style>
</head>
<body>
  <div class="bg-elements">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
  </div>

  <section class="contact-hero">
    <div class="hero-content">
      <h1>Contactez-nous</h1>
      <p class="intro-text">Nous sommes là pour répondre à vos questions et vous aider dans votre apprentissage du turc.</p>
    </div>
  </section>

  <section class="contact-main">
    <div class="contact-container">
      <div class="contact-form">
        <h2>Envoyez-nous un message</h2>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe3TADXG6DdGpqoubXjwXLlKj2M9ivBPLSrFBGC0_pKAoLC5A/viewform?embedded=true" width="100%" height="650" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
      </div>
    </div>
  </section> <section class="faq-section">
    <h2>Questions fréquentes</h2>
    <div class="faq-grid">
      <div class="faq-item">
        <h3>Comment puis-je m'inscrire à un cours?</h3>
        <p>Vous pouvez nous contacter en remplissant le formulaire pour discuter de vos besoins spécifiques.</p>
      </div>

      <div class="faq-item">
        <h3>Quels sont vos tarifs?</h3>
        <p>Nos tarifs varient selon le type de cours (individuel, en groupe) et la fréquence. Contactez-nous pour obtenir une offre personnalisée.</p>
      </div>

      <div class="faq-item">
        <h3>Proposez-vous des cours pour débutants complets?</h3>
        <p>Oui, nous avons des programmes spécialement conçus pour les débutants, avec une approche progressive et adaptée aux francophones.</p>
      </div>

      <div class="faq-item">
        <h3>Quelle est votre politique d'annulation?</h3>
        <p>Vous pouvez annuler ou reporter un cours jusqu'à 24 heures à l'avance sans frais. Les annulations de dernière minute peuvent être soumises à des frais.</p>
      </div>
    </div>
  </section>

  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-brand">
        <p>Votre plateforme complète pour apprendre la langue turque, en ligne et à votre rythme.</p>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
        
  </footer>
</body>
</html>
