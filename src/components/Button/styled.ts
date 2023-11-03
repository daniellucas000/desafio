import styled from 'styled-components';

interface ButtonProps {
  $bgColor?: string;
  $color?: string;
  $margin?: string;
}

export const StyledButton = styled('button')<ButtonProps>`
  background-color: ${(props) => props.$bgColor || '#d6c6fd'};
  color: ${(props) => props.$color || '#FFFFFF'};
  margin: ${(props) => props.$margin || '0'};
  border: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;
