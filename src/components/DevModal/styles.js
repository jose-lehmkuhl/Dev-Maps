import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  z-index: 2;
  background: #000;
  opacity: 0.6;
  height: 100%;
  width: 100%;
`;

export const Modal = styled.div`
  position: absolute;
  box-sizing: border-box;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: fit-content;
  width: fit-content;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-weight: bold;
    margin-bottom: 0;
  }

  form {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    input {
      box-sizing: border-box;
      outline: none;
      width: 100%;
      height: 40px;
      border-radius: 5px;
      margin-bottom: 10px;
      font-size: 18px;
      border-width: 1;
      border-color: #444;
      padding: 5px 5px;

      border: ${({ gotError }) => (gotError ? '2px solid #F00' : 1)};
    }

    button {
      box-sizing: border-box;
      border-radius: 5px;
      padding: 5px 5px;
      font-size: 20px;
      height: 40px;
      width: 48%;
      padding: 10px;
      color: #fff;
    }

    .cancelar {
      background: #aaa;
    }

    .submit {
      background: green;
    }
  }
`;
