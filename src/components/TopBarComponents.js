// import "../assets/vendor/animate.css/animate.min.css";
// import "../assets/vendor/bootstrap/css/bootstrap.min.css";
// import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
// import "../assets/vendor/boxicons/css/boxicons.min.css";
// import "../assets/vendor/glightbox/css/glightbox.min.css";
// import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/style.css";

const TopBarComponent = () => {
  return (
    <>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope-fill"></i>
            <a href="mailto:contact@example.com">info@vsgcambodia.org</a>
            <i className="bi bi-phone-fill phone-icon"></i> +85553 730 355
          </div>
          <div className="social-links d-none d-md-block">
            <a href="#" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#https://www.facebook.com/vsg1994/" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="youtube">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBarComponent;
