// import { useEffect } from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import {
  toastFail,
  toastFailTechRegister,
  toastSuccesLogin,
  toastSuccesRegister,
  toastSuccesTechEdit,
  toastSuccesTechRegister,
  toastSuccesTechRmv,
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
  // handleProductEdit: (data: IhandleProductEdit) => void;
  // handleProductRmv: () => void;
  // logout: () => void;
  setActualProduct: React.Dispatch<React.SetStateAction<IProductsData>>;
  // loading: boolean;
  productsList: IProducts[];
}

export const ApiContext = createContext<IApiContext>({} as IApiContext);

export const ApiProvider = ({ children }: IApiProviderProps) => {

  const [loading, setLoading] = useState(true);
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

    console.log(data)

    await api
      .post("/products", data)
      .then((res) => {
        console.log(res.data)
        setNewProductsList([...productsList, res.data]);
        toastSuccesTechRegister();
      })
      .catch((res) => {
        console.error(res);
        toastFailTechRegister();
      });
  };

  // const actTechList = async () => {
  //   const { id } = userData;
  //   await api.get(`/users/${id}`).then((res) => {
  //     setNewTechList(res.data.techs);
  //   });
  // };

  // const handleTechEdit = async (data: IhandleTechEdit) => {
  //   const { id } = actualTech;
  //   console.log(data);
  //   await api.put(`/users/techs/${id}`, { status: data.status }).then(() => {
  //     actTechList();
  //     const newList = techList.filter((elem) => elem);
  //     setNewTechList(newList);
  //     setTechEditRmvModal(false);
  //     toastSuccesTechEdit();
  //   });
  // };

  // const handleTechRmv = async () => {
  //   const { id } = actualTech;
  //   await api.delete(`/users/techs/${id}`).then(() => {
  //     const newList = techList.filter((elem) => elem.id !== id);
  //     setNewTechList(newList);
  //     toastSuccesTechRmv();
  //     setTechEditRmvModal(false);
  //   });
  // };

  // function logout() {
  //   localStorage.clear();
  //   navigate("../", { replace: true });
  // }

  return (
    <ApiContext.Provider
      value={{
        onSubmitRegisterProductFunction,
        productsList,
        setActualProduct,
        // logout,
        // loading,
        // techList,
        // userData,
        // actualTech,
        // setUserData,
        // techAddModal,
        // handleTechRmv,
        // setActualTech,
        // handleTechEdit,
        // setTechAddModal,
        // techEditRmvModal,
        // setTechEditRmvModal,
        // onSubmitLoginFunction,
        // onSubmitRegisterFunction,
        // onSubmitRegisterTechFunction,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
