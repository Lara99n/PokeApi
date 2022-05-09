import Style from "./Card.module.css";

const Card = ({ image, name, types }) => {
  return (
    <div className={Style.card}>
      <div className={Style.imgContainer}>
        <img src={image} alt="img" className={Style.img} />
      </div>
      <h2 className={Style.title}>{name}</h2>
      <h4 className={Style.description}>
        {types.map((e, index) => (
          <div key={index}>
            <i>{e.name}</i>
          </div>
        ))}
      </h4>
    </div>
  );
};

export default Card;
