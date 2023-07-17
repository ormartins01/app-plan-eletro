import toast from "react-hot-toast";

export const toastSuccesLogin = () =>
  toast.success(" Login efetuado com sucesso! ", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastSuccesRegister = () =>
  toast.success("Usuário registrado com sucesso!", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastSuccesTechRegister = () =>
  toast.success("Tecnologia adicionada com sucesso!", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastSuccesTechRmv = () =>
  toast.success("Tecnologia removida com sucesso!", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastSuccesTechEdit = () =>
  toast.success("Tecnologia Atualizada com sucesso!", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastFail = () =>
  toast.error("Ops! Algo deu errado", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#ff2922",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastFailTechRegister = () =>
  toast.error("Esta Tecnologia já existe, tente atualizar o status dela.", {
    duration: 5200,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#ff2922",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
