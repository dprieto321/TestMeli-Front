import { Link } from "react-router-dom";
import logo from "../../assets/Logo_ML.png";

const Logo = () => {
  return (
    <Link to="/" title="Inicio">
      <img src={logo} height={40} alt="Logo Mercado libre" />
    </Link>
  );
};

export default Logo;
