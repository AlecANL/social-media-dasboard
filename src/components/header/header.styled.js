import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-block-start: 2.25rem;

  .dark-mode {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
  h1 {
    margin: 0;
    font: var(--mobile-mainHeadline);
    color: var(--just-black);
  }
  p {
    margin: 0;
    margin-block-start: 0.25rem;
    font: var(--mobile-smallTextBold);
    color: var(--just-gray);
  }
  hr {
    margin: 0;
  }
  .dark-mode span {
    font: var(--mobile-smallTextBold);
    color: var(--soft-gray);
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    h1 {
      font: var(--desktop-mainHeadline);
    }
    hr {
      display: none;
    }
  }
`;
