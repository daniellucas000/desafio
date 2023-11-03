import styled from 'styled-components';

export const Container = styled('div')`
  /* display: grid;
  padding-right: 1.25rem;
  gap: 5rem;
  grid-template-columns: 17.5rem auto; */

  @media (max-width: 576px) {
    grid-template-columns: 80px 1fr;
    gap: 0;
    padding: 1rem;
  }
`;

export const CrudContainer = styled('div')`
  max-width: 1200px;
  margin: 0 auto;

  > div:nth-child(2) {
    overflow-x: auto;
  }
`;
