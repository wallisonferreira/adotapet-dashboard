import styled from 'styled-components';

import theme from 'styles/theme';

export const Main = styled.div`
  padding: 3rem 10rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 3rem 2rem;
  }
`;
