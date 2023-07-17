import styled from "styled-components";

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32%;
    height: 100%;
    color: #F8F9FA;
    background-color: #212529;
    

    
    h2 {
        margin-top: 36px;

    }

   #divProductRegister {
    width: 396px;
    height: 420px;
    background-color: #212529;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    border-radius: 8px;
    

    form {
        width: 85%;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-top: 20px;
    }

    span{
        width: 90%;
        text-align: left;
        padding-bottom: 10px;
        font-size: 10px;
        color: #E83F5B;
        margin-top: -16px;
        margin-left: 4px;
    }
    
    .errors{
        color: #E83F5B;
    }
   }

`;