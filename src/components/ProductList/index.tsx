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
              title="Clique para editar este Produto"
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
                <div id="firstDiv">
                <h3>{elem.name}</h3>
                <p>{elem.description}</p>
                </div>
                <div id="firstDiv">
                <span>{elem.brand}</span>
                <span>{elem.tension}</span>
                </div>
              </div>
            </Product>
          );
        })
      )}
    </List>
  );
};
