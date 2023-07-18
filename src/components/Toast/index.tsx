import toast from "react-hot-toast";

export const toastSuccesProductRegister = () =>
  toast.success("Produto adicionado com sucesso!", {
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

export const toastSuccesProductRmv = () =>
  toast.success("Produto removido com sucesso!", {
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

export const toastSuccesProductEdit = () =>
  toast.success("Produto atualizado com sucesso!", {
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


