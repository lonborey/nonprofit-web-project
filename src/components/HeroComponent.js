const { Link } = require("react-router-dom");

const HeroComponent = () => {
  const slide = [
    {
      sileImage: require("../assets/img/slide/slide-1.jpg"),
      title: "Green",
      discription: "Ut velit est quam dolor ad.",
      link: "/about",
    },

    {
      sileImage: require("../assets/img/slide/slide-2.jpg"),
      title: "Nature",
      discription: "Ut velit est quam dolor ad.",
      link: "/about",
    },
  ];

  return (
    <>
      <section id="hero">
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

          <div class="carousel-inner" role="listbox">
            {slide.map((slide, index) => {
              return (
                <>
                  {/* <!-- Slide 1 --> */}
                  <div
                    class="carousel-item active"
                    style={{
                      backgroundImage: `url(${slide.sileImage})`,
                    }}
                  >
                    <div class="carousel-container">
                      <div class="container">
                        <h2 class="animate__animated animate__fadeInDown">
                          Welcome to <span>Village Support Group</span>
                        </h2>
                        <p class="animate__animated animate__fadeInUp">
                          The targeted communities live in a harmonious and
                          healthy environment with food security, sustainable
                          economy development, self-reliance, and gender and
                          democratic sensitization.
                        </p>
                        <a
                          href="#about"
                          class="btn-get-started animate__animated animate__fadeInUp scrollto"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroComponent;
