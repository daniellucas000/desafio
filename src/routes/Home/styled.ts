import styled from 'styled-components';

export const HomeContainer = styled('div')`
  max-width: 1200px;
  margin: 0px auto;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(223px, 1fr));
  gap: 15px; */
`;

export const BoxContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  margin-top: 2rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }

  div {
    min-width: 30%;
    padding: 1rem;
    background: ${(props) => props.theme['white']};
    border-radius: 0.75rem;

    border-radius: 1.25rem;
    border: 1px solid #f8f9fa;
    box-shadow: 0px 4px 20px 0px rgba(238, 238, 238, 0.5);

    h2 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['black']};
      font-weight: 600;
      letter-spacing: -0.0125rem;
      margin-bottom: 1.5rem;
    }

    ul {
      display: flex;
      flex-direction: column;
    }

    ul li {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-800']};
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.01875rem;
      display: flex;
      gap: 0.5rem;

      span {
        font-weight: 600;
      }
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['black']};
    }
  }
`;
