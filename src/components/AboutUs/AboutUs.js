import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <section className="specialists" id="specialists">
        <div className="container">
          <h2 className="heading-specialists">Nasi specjaliści</h2>
          <div className="specialist">
            <div className="specialist-img"></div>
            <div className="specialist-info-wrapper">
              <p className="name">Krystyna Nowak [Księgowość]</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel massa et lacus egestas cursus a non magna. Fusce scelerisque
                blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
                tempor elementum lorem in, varius pellentesque ligula. Duis
                efficitur lacinia enim, non tincidunt libero ultrices in.
              </p>
            </div>
          </div>
          <div className="specialist">
            <div className="specialist-img"></div>
            <div className="specialist-info-wrapper">
              <p className="second-name">Anna Kowalska [Marketing]</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                vel massa et lacus egestas cursus a non magna. Fusce scelerisque
                blandit nunc, id malesuada ex lobortis a. Integer felis nisi,
                tempor elementum lorem in, varius pellentesque ligula. Duis
                efficitur lacinia enim, non tincidunt libero ultrices in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
