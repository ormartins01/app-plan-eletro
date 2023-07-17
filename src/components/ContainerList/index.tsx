import { ProductList } from "../ProductList";
import { DivContainer } from "./styles";

export const ConatinerList = () => {
  return (
    <DivContainer>
      <div id="divHeaderTech">
        <h2>Lista de Produtos</h2>
      </div>
      <div>
        <ProductList />
      </div>
    </DivContainer>
  );
};
