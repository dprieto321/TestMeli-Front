import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./search.scss";
import { IForm } from "../../interfaces";
import Input from "../Input";
import Button from "../Button";
import searchIcon from "../../assets/ic_Search.png";

const Search = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (data) => {
    navigate(`/items?search=${data.search.toString().trim()}`);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Nunca dejes de buscar"
        {...register("search", { required: true })}
      />
      <Button type="submit">
        <img src={searchIcon} alt="Buscar" className="Icon" />
      </Button>
    </form>
  );
};

export default Search;
