import Header from "../header";
import { ILayoutProps } from "../../interfaces";
import "./mainlayaout.scss";

const MainLayout = (props: ILayoutProps) => {
  return (
    <>
      <Header />
      <div className="containerBody">{props.children}</div>
    </>
  );
};

export default MainLayout;
