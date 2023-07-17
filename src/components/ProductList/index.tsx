import { ApiContext } from "../../context/ApiContext";
import { useContext } from "react";
import { List, Product } from "./styles";

export const ProductList = () => {
  const { productsList, setActualProduct } =
    useContext(ApiContext);

  return (
    <List id="listContainer">
      {productsList.length === 0 ? (
        <h3 id="emptyList" key={"1"}>
          Não possui nenhum produto cadastrado
        </h3>
      ) : (
        productsList.map((elem) => {
          return (
            <Product
              key={elem.id}
              id="listCard"
              title="Clique para editar esta Tech"
              onClick={() => {
                setActualProduct({
                  id: elem.id,
                  name: elem.name,
                  description: elem.description,
                  tension: elem.tension,
                  brand: elem.brand
                });
                // setTechEditRmvModal(true);
              }}
            >
              <div id="divCard">
                <h3>{elem.name}</h3>
                <span>{elem.brand}</span>
              </div>
            </Product>
          );
        })
      )}
    </List>
  );
};
