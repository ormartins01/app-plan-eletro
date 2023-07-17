import * as yup from "yup";

export const formProductSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    description: yup.string().required('É necessário uma descrição'),
    tension: yup.number().min(1, "No minimo 6 digitos").max(1, "No máximo 3 digitos").required(),
    brand: yup.string().required('Escolha uma marca').oneOf([
        "Eletrolux",
        "Brastemp",
        "Fischer",
        "Samsung",
        "LG"
    ])
});

