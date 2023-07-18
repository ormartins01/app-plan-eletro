import styled from "styled-components";

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);

   #divProductRegister {
    width: 496px;
    height: 450px;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px;

    #closeModal {
        font-size: 16px;
        font-weight: 400;
        margin-top: -5px;
        width: 93%;
        background-color: transparent;
        border: none;
        color: inherit;
        text-align: right;
    }

    #divButtons {
        width: 95%;
        display: flex;
        justify-content: space-around;

    }

    #edit {
        width: 140px;
        border: 1px solid red;
        background-color: aqua;
        font-size: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #trash {
        width: 60px;
        border: 1px solid #868E96;
        background-color: #868E96;
        font-size: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
    }



    form {
        width: 85%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    span{
        width: 90%;
        text-align: left;
        padding-bottom: 10px;
        font-size: 10px;
        color: #868E96;
    }
    
    .errors{
        color: #E83F5B;
    }
   }

`;