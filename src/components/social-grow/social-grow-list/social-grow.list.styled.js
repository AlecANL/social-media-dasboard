import styled from 'styled-components';

export const SocialGrowListStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1.875rem;
  row-gap: 1rem;
  margin-block-start: 2.5rem;
  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
