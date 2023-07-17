import { yupResolver } from "@hookform/resolvers/yup";
import { ApiContext, ISubmitRegisterProduct } from "../../context/ApiContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Section } from "./styles";
import { ButtonAddProduct } from "../Button";
import { InputStyle } from "../Input/style";
import { SelectStyle } from "../Select/style";
import { formProductSchema } from "../../schemas/formSchema";

export const ProductAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitRegisterProduct>({
    resolver: yupResolver(formProductSchema),
  });

  const { onSubmitRegisterProductFunction } =
    useContext(ApiContext);

  return (
    <Section>
         <h2>Cadastrar Produto</h2>
         <div id="divProductRegister">
          <form action="" onSubmit={handleSubmit(onSubmitRegisterProductFunction)}>
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
            <ButtonAddProduct />
          </form>
        </div>
    </Section>
  );
};
