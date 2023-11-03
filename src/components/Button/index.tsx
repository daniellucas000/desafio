import { ButtonProps } from '../../types/button';
import { StyledButton } from './styled';

export function Button({ children, onClick, bgColor, color, margin }: ButtonProps) {
  return (
    <StyledButton $bgColor={bgColor} $color={color} $margin={margin} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
