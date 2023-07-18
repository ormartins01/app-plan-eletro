import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ApiContext, IProductsUpdate } from "../../context/ApiContext";
import { ButtonStyle } from "../Button/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Section } from "./styles";
import { useForm } from "react-hook-form";
import { InputStyle } from "../Input/style";
import { SelectStyle } from "../Select/style";
import { formProductSchema } from "../../schemas/formSchema";

export const ProductEditRmv = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductsUpdate>({
    resolver: yupResolver(formProductSchema),
  });

  const { handleProductEdit, setProductEditRmvModal, handleProductRmv } =
    useContext(ApiContext);

  return (
    <Section>
      <div id="divProductRegister">
        <button id="closeModal" onClick={() => setProductEditRmvModal(false)}>
          x
        </button>
        <h2>Editar Tecnologia</h2>
        <form onSubmit={handleSubmit(handleProductEdit)}>
        <InputStyle placeholder="Nome do Produto" id="title" {...register("name")} />
            <span>{errors.name?.message}</span>

            <InputStyle placeholder="Insira uma descrição" id="description" {...register("description")} />
            <span>{errors.description?.message}</span>

            <SelectStyle placeholder="Selecione uma voltagem" className="select" {...register("tension")}>
            <option value="">Escolha uma voltagem</option>
              <option value="5">5 Volts</option>
              <option value="12">12 Volts</option>
              <option value="110">110 Volts</option>
              <option value="220">220 Volts</option>
            </SelectStyle>

            <SelectStyle placeholder="Selecione uma marca" className="select" {...register("brand")}>
            <option value="">Escolha uma marca</option>
              <option value="Eletrolux">Eletrolux</option>
              <option value="Brastemp">Brastemp</option>
              <option value="Fischer">Fischer</option>
              <option value="Samsung">Samsung</option>
              <option value="LG">LG</option>
            </SelectStyle>
          <div id="divButtons">
            <ButtonStyle
              onSubmit={handleSubmit(handleProductEdit)}
              id="edit"
              title="Editar Tecnologia"
            >
              <FaEdit />
            </ButtonStyle>
            <ButtonStyle
              onClick={handleSubmit(handleProductRmv)}
              id="trash"
              title="Remover Tecnologia"
            >
              <FaTrashAlt />
            </ButtonStyle>
          </div>
        </form>
      </div>
    </Section>
  );
};
