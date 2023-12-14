import "./style.css";
const Styles = {
  imgFluid: {
    width: 180,
    width: 80,
  },
};

const partnerLogo = [
  {
    logo: require("../assets/img/clients/client-1.png"),
  },
  {
    logo: require("../assets/img/clients/client-2.png"),
  },
  {
    logo: require("../assets/img/clients/client-3.png"),
  },
  {
    logo: require("../assets/img/clients/client-4.png"),
  },
  {
    logo: require("../assets/img/clients/client-5.png"),
  },
  {
    logo: require("../assets/img/clients/client-6.png"),
  },
];

const PartnerComponent = () => {
  return (
    <>
      <section id="clients" class="clients">
        <div class="container">
          <div class="clients-slider swiper">
            <div class="swiper-wrapper align-items-center">
              <div class="swiper-slide slide-container">
                {partnerLogo.map((partner, index) => {
                  return (
                    <img
                      src={partner.logo}
                      class="img-fluid"
                      style={Styles.imgFluid}
                      alt=""
                    />
                  );
                })}
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerComponent;
