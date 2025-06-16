---
layout: default
---


<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact - ApprendreTurc</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link rel="stylesheet" href="assets/css/homepage.css">
  <style>
    /* Additional styles specific to contact page */
    .contact-hero {
      background: linear-gradient(135deg, #6e48aa 0%, #9d50bb 100%);
      color: white;
      padding: 5rem 2rem;
      text-align: center;
    }
    
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
    
    .contact-info {
      background: #f9f9f9;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }
    
    .contact-form {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .contact-method {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }
    
    .contact-icon {
      font-size: 1.5rem;
      color: #6e48aa;
      margin-right: 1rem;
      margin-top: 0.3rem;
    }
    
    .contact-details h3 {
      margin-bottom: 0.5rem;
      color: #333;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #555;
    }
    
    .form-control {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
    }
    
    textarea.form-control {
      min-height: 150px;
      resize: vertical;
    }
    
    .submit-btn {
      background: #6e48aa;
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    
    .submit-btn:hover {
      background: #9d50bb;
      transform: translateY(-2px);
    }
    
    .contact-map {
      margin-top: 3rem;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    @media (max-width: 768px) {
      .contact-container {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <!-- Animated Background Elements -->
  <div class="bg-elements">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
  </div>

  <!-- Contact Hero Section -->
  <section class="contact-hero">
    <div class="hero-content">
      <h1>Contactez-nous</h1>
      <p class="intro-text">Nous sommes là pour répondre à vos questions et vous aider dans votre apprentissage du turc.</p>
    </div>
  </section>

  <!-- Main Contact Content -->
  <section class="contact-main">
    <div class="contact-container">
      <div class="contact-info">
        <h2>Informations de contact</h2>
        
        <div class="contact-method">
          <div class="contact-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="contact-details">
            <h3>Email</h3>
            <p>contact@apprendreturc.com</p>
            <p>support@apprendreturc.com</p>
          </div>
        </div>
        
        <div class="contact-method">
          <div class="contact-icon">
            <i class="fas fa-phone-alt"></i>
          </div>
          <div class="contact-details">
            <h3>Téléphone</h3>
            <p>+33 6 12 34 56 78</p>
            <p>Lundi-Vendredi: 9h-18h</p>
          </div>
        </div>
        
        <div class="contact-method">
          <div class="contact-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div class="contact-details">
            <h3>Adresse</h3>
            <p>123 Rue du Turc</p>
            <p>75015 Paris, France</p>
          </div>
        </div>
        
        <div class="contact-method">
          <div class="contact-icon">
            <i class="fas fa-comments"></i>
          </div>
          <div class="contact-details">
            <h3>Réseaux sociaux</h3>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="contact-form">
        <h2>Envoyez-nous un message</h2>
        <form id="contactForm">
          <div class="form-group">
            <label for="name">Nom complet</label>
            <input type="text" id="name" class="form-control" required>
          </div>
          
          <div class="form-group">
            <label for="email">Adresse email</label>
            <input type="email" id="email" class="form-control" required>
          </div>
          
          <div class="form-group">
            <label for="subject">Sujet</label>
            <select id="subject" class="form-control" required>
              <option value="" disabled selected>Sélectionnez un sujet</option>
              <option value="courses">Informations sur les cours</option>
              <option value="technical">Problème technique</option>
              <option value="feedback">Retour/Suggestion</option>
              <option value="other">Autre</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" class="form-control" required></textarea>
          </div>
          
          <button type="submit" class="submit-btn">
            <i class="fas fa-paper-plane"></i> Envoyer le message
          </button>
        </form>
      </div>
    </div>
    

  <!-- FAQ Section -->
  <section class="faq-section" style="padding: 3rem 2rem; max-width: 1200px; margin: 0 auto;">
    <h2 style="text-align: center; margin-bottom: 2rem;">Questions fréquentes</h2>
    
    <div class="faq-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
      <div class="faq-item" style="background: #f9f9f9; padding: 1.5rem; border-radius: 8px;">
        <h3 style="color: #6e48aa; margin-bottom: 0.5rem;">Comment puis-je m'inscrire à un cours?</h3>
        <p>Vous pouvez réserver un cours directement via notre plateforme en ligne ou nous contacter par email/téléphone pour discuter de vos besoins spécifiques.</p>
      </div>
      
      <div class="faq-item" style="background: #f9f9f9; padding: 1.5rem; border-radius: 8px;">
        <h3 style="color: #6e48aa; margin-bottom: 0.5rem;">Quels sont vos tarifs?</h3>
        <p>Nos tarifs varient selon le type de cours (individuel, en groupe) et la fréquence. Contactez-nous pour obtenir une offre personnalisée.</p>
      </div>
      
      <div class="faq-item" style="background: #f9f9f9; padding: 1.5rem; border-radius: 8px;">
        <h3 style="color: #6e48aa; margin-bottom: 0.5rem;">Proposez-vous des cours pour débutants complets?</h3>
        <p>Oui, nous avons des programmes spécialement conçus pour les débutants, avec une approche progressive et adaptée aux francophones.</p>
      </div>
      
      <div class="faq-item" style="background: #f9f9f9; padding: 1.5rem; border-radius: 8px;">
        <h3 style="color: #6e48aa; margin-bottom: 0.5rem;">Quelle est votre politique d'annulation?</h3>
        <p>Vous pouvez annuler ou reporter un cours jusqu'à 24 heures à l'avance sans frais. Les annulations de dernière minute peuvent être soumises à des frais.</p>
      </div>
    </div>
  </section>

  <!-- Footer (same as index page) -->
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
      

  <script>
    // Form submission handling
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would normally send the form data to your server
      alert('Merci pour votre message! Nous vous répondrons dès que possible.');
      this.reset();
    });
  </script>
</body>
</html>
