import styled from 'styled-components';

export const HeaderContainer = styled('header')`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    line-height: 0.2;
  }

  a {
    color: ${(props) => props.theme['black']};
  }

  button {
    display: none;
    background: none;
    border: 0;
    color: ${(props) => props.theme['black']};

    @media (max-width: 576px) {
      display: block;
    }
  }
`;
