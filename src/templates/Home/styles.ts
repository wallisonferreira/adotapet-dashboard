import styled from 'styled-components';

import theme from 'styles/theme';

export const CategoriesSpecies = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    gap: 2.5rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const GridMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2rem;
  padding-top: 5rem;

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1;
  position: sticky;
  top: 8rem;
  left: 0;
  height: 40rem;
  transition: 0.3s ease-in-out;
`;

export const InputSearchMobile = styled.input`
  display: flex;
  border: none;
  height: 5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: white;
  border: 1px solid #e5e5e5;
  color: gray;
  font-size: 1.3rem;
  border-radius: 8px;
`;
