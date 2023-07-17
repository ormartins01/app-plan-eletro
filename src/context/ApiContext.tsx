// import { useEffect } from "react";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

export interface IBrands {
  id: string;
  brand_name: string;
  updated_at: string;
  created_at: string;
}

export interface IProducts {
  id: string;
  name: string;
  description: string;
  tension: number;
  brand_id: string;
  updated_at: string;
  created_at: string;
}

export interface ISubmitRegisterBrand {
  brand_name: string;
}

export interface ISubmitRegisterProduct {
  name: string;
  description: string;
  tension: number;
  brand_id: string;
}

export interface IhandleBrandEdit {
  brand_name: string;
}

export interface IhandleProductEdit {
  name?: string;
  description?: string;
  tension?: number;
  brand_id?: string;
}

export interface IApiContext {
  onSubmitRegisterBrandFunction: (data: ISubmitRegisterBrand) => void;
  onSubmitRegisterProductFunction: (data: ISubmitRegisterProduct) => void;
  handleBrandEdit: (data: IhandleBrandEdit) => void;
  handleProductEdit: (data: IhandleProductEdit) => void;
  handleProductRmv: () => void;
  logout: () => void;
  setBrandData: React.Dispatch<React.SetStateAction<IBrands>>;
  setProductsData: React.Dispatch<React.SetStateAction<IProducts>>;
  setActualBrand: React.Dispatch<React.SetStateAction<ISubmitRegisterBrand>>;
  setActualProduct: React.Dispatch<React.SetStateAction<ISubmitRegisterProduct>>;
  setBrandAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  brandAddModal: boolean;
  productsList: IProducts[];
  brandsList: IBrands[];
}

export const AuthContext = createContext<IApiContext>({} as IApiContext);

export const ApiProvider = ({ children }: IApiProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [brandAddModal, setBrandAddModal] = useState(false);
  const [brandsList, setBrandList] = useState<IBrands[]>([] as IBrands[]);
  const [newBrandsList, setNewBrandList] = useState<IBrands[]>([] as IBrands[]);
  const [ProductsList, setProductsList] = useState<IBrands[]>([] as IBrands[]);
  const [newProductsList, setNewProductsList] = useState<IBrands[]>([] as IBrands[]);
  // const [techEditRmvModal, setTechEditRmvModal] = useState(false);

  useEffect(() => {
    const loadBrands = async () => {
      await api.get(`/brands`).then((res) => {
        setBrandList(res.data.techs);
      });
    };

    loadBrands();
  }, []);

  useEffect(() => {
    setBrandList(newBrandsList);
  }, [newBrandsList]);

  useEffect(() => {
    setProductsList(newProductsList);
  }, [newProductsList]);


  const onSubmitLoginFunction = async (data: IUserLogin) => {
    await api
      .post("sessions", { ...data })
      .then((response) => {
        const { user, token } = response.data;
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setUserData(user);
        localStorage.setItem("@KenzieHub-token", token);
        setTechList(response.data.user.techs);
        navigate("/Dashboard", { replace: true });
        toastSuccesLogin();
      })
      .catch((response) => {
        console.log(response);
        toastFail();
      });
  };

  const onSubmitRegisterFunction = async (data: IUserRegister) => {
    await api
      .post("users", { ...data })
      .then((res) => {
        toastSuccesRegister();
      })
      .catch((res) => {
        console.error(res);
        toastFail();
      });
    navigate("../");
  };

  const onSubmitRegisterTechFunction = async (data: ISubmitRegisterTech) => {
    await api
      .post("/users/techs", data)
      .then((res) => {
        setNewTechList([...techList, res.data]);
        toastSuccesTechRegister();
        setTechAddModal(false);
      })
      .catch((res) => {
        console.error(res);
        toastFailTechRegister();
      });
  };

  const actTechList = async () => {
    const { id } = userData;
    await api.get(`/users/${id}`).then((res) => {
      setNewTechList(res.data.techs);
    });
  };

  const handleTechEdit = async (data: IhandleTechEdit) => {
    const { id } = actualTech;
    console.log(data);
    await api.put(`/users/techs/${id}`, { status: data.status }).then(() => {
      actTechList();
      const newList = techList.filter((elem) => elem);
      setNewTechList(newList);
      setTechEditRmvModal(false);
      toastSuccesTechEdit();
    });
  };

  const handleTechRmv = async () => {
    const { id } = actualTech;
    await api.delete(`/users/techs/${id}`).then(() => {
      const newList = techList.filter((elem) => elem.id !== id);
      setNewTechList(newList);
      toastSuccesTechRmv();
      setTechEditRmvModal(false);
    });
  };

  function logout() {
    localStorage.clear();
    navigate("../", { replace: true });
  }

  return (
    <AuthContext.Provider
      value={{
        logout,
        loading,
        techList,
        userData,
        actualTech,
        setUserData,
        techAddModal,
        handleTechRmv,
        setActualTech,
        handleTechEdit,
        setTechAddModal,
        techEditRmvModal,
        setTechEditRmvModal,
        onSubmitLoginFunction,
        onSubmitRegisterFunction,
        onSubmitRegisterTechFunction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
