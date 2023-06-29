import "./Box.css";

const Box = ({ name, isNew }) => {
  return (
    <div className="box">
      {name}{" "}
      {isNew && (
        <>
          <p>(nowość)</p>
          <div className="circle"></div>
        </>
      )}
    </div>
  );
};

export default Box;
