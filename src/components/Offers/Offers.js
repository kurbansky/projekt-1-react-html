import Box from "../Box/Box";
import offers from "../../data/offers.js";
import "./Offers.css";

const Offers = () => {
  return (
    <section className="offers" id="offers">
      <div className="container">
        <h2 className="heading-offers">Czym zajmuje się nasza firma?</h2>
        <div className="box-container">
          {offers.map(({ name, isNew }) => {
            return <Box key={name} name={name} isNew={isNew}></Box>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
