import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  height: calc(100% - 40px);
  width: 320px;
  z-index: 1;
  margin: 20px;
  left: 0;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

export const User = styled.div`
font-family: sans-serif;
    box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  padding-bottom: 15px;
  border-bottom: 1px solid #EEE;

  img {
    height: 48px;
    width: 48px;
    margin-right: 10px;
    border-radius: 50%;
  }

  div {
    width: fit-content;
    margin: auto 0;
    text-align: left;
  }

  p {
    font-weight: bold;
    color: #333
    font-size: 16px;
    margin: 0;
  }

  small {
    color: #555;
  }

  div.icons {
    text-align: right;
    margin-right: 0;
    margin-left: auto;

    i {
      font-size: 20px;
      color: #aaa;
    }

    button {
      outline: 0;
      background: #fff;
      border: 0;

      .fa-times-circle {
        margin-right: 20px;
        color: #D45454;
      }

      &:hover {
        .fa-times-circle {
          font-size: 22px;
          color: #f80;
        }
      }
    }
  }
`;
