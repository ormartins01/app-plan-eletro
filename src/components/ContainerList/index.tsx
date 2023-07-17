import { ProductList } from "../ProductList";
import { DivContainer } from "./styles";

export const ConatinerList = () => {
  return (
    <DivContainer>
      <div id="divHeaderProduct">
        <h2 id="title">Lista de Produtos</h2>
      </div>
      <div>
        <ProductList />
      </div>
    </DivContainer>
  );
};
