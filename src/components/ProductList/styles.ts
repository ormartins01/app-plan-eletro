import styled from "styled-components";



export const List = styled.div`
    width: 100%;
    height: 448px;
    color: #F8F9FA;
    background-color: #212529;
    border: #FEFEFE;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    overflow-y: scroll;
    margin-bottom: 25px;
    #emptyList {
        padding: 30px;
    }

    #listCard {
      margin-top: 10px;
    }

    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--color-text-light);
  margin: 1rem;
  border-radius: 1.6rem;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--color-primary-dark);
  border-radius: 1.6rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}

  
`;

export const Product = styled.div`
    width: 95%;
    height: 55px;
    background-color: black;
    border: 1px solid  #808080;
    list-style: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    

    #divCard{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: -2px;
        padding: 15px;
    }

    button {
      width: 28px;
      height: 28px;
      margin-left: 15px;
    }

    :hover {
      background-color: #343B41;
      border-radius: 8px;
      border: 1px solid  #808080;
    }

`;