// import { useEffect } from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import {
  toastFail,
  toastSuccesProductEdit,
  toastSuccesProductRegister,
  toastSuccesProductRmv,
} from "../components/Toast";
import api from "../services/api";

interface IApiProviderProps {
  children: ReactNode;
}

export interface IProducts {
  id: string;
  name: string;
  description: string;
  tension: number;
  brand: string;
  updated_at: string;
  created_at: string;
}

export interface IProductsUpdate {
  name: string;
  description: string;
  tension: number;
  brand: string;
}

export interface IProductsData {
  id: string;
  name: string;
  description: string;
  tension: number;
  brand: string;

}
export interface ISubmitRegisterProduct {
  name: string;
  description: string;
  tension: number;
  brand: string;
}

export interface IhandleProductEdit {
  name?: string;
  description?: string;
  tension?: number;
  brand?: string;
}

export interface IApiContext {
  onSubmitRegisterProductFunction: (data: ISubmitRegisterProduct) => void;
  setProductEditRmvModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleProductEdit: (data: IhandleProductEdit) => void;
  productEditRmvModal: boolean;
  handleProductRmv: () => void;
  // logout: () => void;
  setActualProduct: React.Dispatch<React.SetStateAction<IProductsData>>;
  // loading: boolean;
  productsList: IProducts[];
}

export const ApiContext = createContext<IApiContext>({} as IApiContext);

export const ApiProvider = ({ children }: IApiProviderProps) => {

  const [loading, setLoading] = useState(true);
  const [productEditRmvModal, setProductEditRmvModal] = useState(false);
  const [productsList, setProductsList] = useState<IProducts[]>([] as IProducts[]);
  const [newProductsList, setNewProductsList] = useState<IProducts[]>([] as IProducts[]);
  const [actualProduct, setActualProduct] = useState<IProductsData>(
    {} as IProducts
  );



  useEffect(() => {
    const loadProducts = async () => {
      await api.get(`/products`).then((res) => {
        setProductsList(res.data);
      });
    };

    loadProducts();
  }, []);

  useEffect(() => {
    setProductsList(newProductsList);
  }, [newProductsList]);


  const onSubmitRegisterProductFunction = async (data: ISubmitRegisterProduct) => {
    await api
      .post("/products", data)
      .then((res) => {
        setNewProductsList([...productsList, res.data]);
        toastSuccesProductRegister();
      })
      .catch((res) => {
        console.error(res);
        toastFail();
      });
  };

  const loadProducts = async () => {
    await api.get(`/products`).then((res) => {
      setProductsList(res.data);
    });
  };

  const handleProductEdit = async (data: IhandleProductEdit) => {
    const { id } = actualProduct;
    console.log("Chegando")
    await api.put(`/products/${id}`, data).then(() => {
      loadProducts();
      const newList = productsList.filter((elem) => elem);
      setNewProductsList(newList);
      setProductEditRmvModal(false);
      toastSuccesProductEdit();
    });
  };

  const handleProductRmv = async () => {
    const { id } = actualProduct;
    await api.delete(`/products/${id}`).then(() => {
      const newList = productsList.filter((elem) => elem.id !== id);
      setNewProductsList(newList);
      toastSuccesProductRmv();
      setProductEditRmvModal(false);
    });
  };


  return (
    <ApiContext.Provider
      value={{
        onSubmitRegisterProductFunction,
        productsList,
        setActualProduct,
        setProductEditRmvModal,
        handleProductEdit,
        productEditRmvModal,
        handleProductRmv
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
