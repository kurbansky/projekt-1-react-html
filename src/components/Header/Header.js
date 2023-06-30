import "./Header.css";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Header = () => {
  return (
    <>
      <nav className="navigation">
        <div className="container">
          <a className="link-item company" href="#">
            Moja firma
          </a>
          <ul>
            <li className="right-nav">
              <a className="link-item" href="#specialists">
                o nas
              </a>
            </li>
            <li className="right-nav">
              <a className="link-item offers-link" href="#offers">
                oferta
              </a>
            </li>
            <li className="right-nav">
              <a className="link-item disabled" href="#">
                kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="header">
        <div className="shadow">
          <div className="container">
            <h1 className="heading">
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <p className="paragraph">Nie wierz nam na słowo - sprawdź</p>
            <a href="#offers" className="offer-btn">
              Oferta
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
