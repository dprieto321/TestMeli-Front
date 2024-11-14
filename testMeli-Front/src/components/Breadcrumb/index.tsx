import { Link } from "react-router-dom";
import "./breadcrumb.scss";
import { Icategory } from "../../interfaces";

const Breadcrumb = ({ categories }: Icategory) => {
  return (
    <nav className="breadcrumb">
      {categories.map((category: string, index: number) => (
        <>
          <Link className="breadCrumbLink" to={`/items?search=${category}`}>
            <span key={index}>
              {category} {index < categories.length - 1 && " > "}
            </span>
          </Link>
        </>
      ))}
    </nav>
  );
};

export default Breadcrumb;
