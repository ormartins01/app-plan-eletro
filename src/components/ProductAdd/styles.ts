import styled from "styled-components";

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    color: #F8F9FA;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed; 
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);

   #divProductRegister {
    width: 396px;
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



    form {
        width: 85%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    label {
        width: 90%;
        text-align: left;
        font-size: 10px;
        color: #F8F9FA;
    }

    span{
        width: 90%;
        text-align: left;
        margin-top: -30px;
        padding-bottom: 10px;
        font-size: 10px;
        color: #868E96;
    }
    
    .errors{
        color: #E83F5B;
    }
   }

`;