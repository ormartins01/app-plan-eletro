import * as yup from "yup";

export const formProductSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    description: yup.string().required('É necessário uma descrição'),
    tension: yup.number().oneOf([
        5,
        12,
        110,
        220,
    ]).required(),
    brand: yup.string().required('Escolha uma marca').oneOf([
        "Eletrolux",
        "Brastemp",
        "Fischer",
        "Samsung",
        "LG"
    ])
});

