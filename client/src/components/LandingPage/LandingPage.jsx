import { Link } from "react-router-dom";
import Style from "./Landing.module.css";

function LandingPage() {
  return (
    <div className={Style.body}>
      <h1 className={Style.letra}>¿Listo para comenzar la PokeAventura?</h1>
      <Link to="/home">
        <button className={Style.btn}>POKE HOME</button>
      </Link>
    </div>
  );
}
export default LandingPage;
