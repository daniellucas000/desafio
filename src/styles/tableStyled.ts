import styled from 'styled-components';

export const TableContainer = styled('table')`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th {
    background-color: whitesmoke;
    padding: 1rem;
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    background-color: ${(props) => props.theme['white']};
    border-bottom: 4px solid whitesmoke;
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      padding-left: 1.5rem;
    }

    &:nth-child(2) {
      width: 50%;
    }

    &:last-child {
      padding-right: 1.5rem;

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;
