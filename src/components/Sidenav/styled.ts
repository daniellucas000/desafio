import styled, { css } from 'styled-components';

interface CartContainerProps {
  readonly $isVisible: boolean;
}

export const SideNavContainer = styled('nav')<CartContainerProps>`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  background: ${(props) => props.theme['white']};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  transition: all 400ms ease 0s;
  transform: translate(0, 0);

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      transform: translate(-110%, 0);
    `}

  @media (max-width: 576px) {
    padding: 1rem;
    align-items: center;
    /* width: 56px; */
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    transition: all 400ms ease 0s;
    /* transform: translate(0%, 0); */

    ${({ $isVisible }) =>
      $isVisible &&
      css`
        transform: translate(0, 0);
      `}
  }

  ul li a {
    color: ${(props) => props.theme['gray-700']};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 0.875rem;
    letter-spacing: -0.01563rem;

    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const ToggleButton = styled('div')`
  cursor: pointer;
  color: ${(props) => props.theme['gray-700']};
  user-select: none;
`;
