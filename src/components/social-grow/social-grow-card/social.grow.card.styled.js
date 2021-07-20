import styled from 'styled-components';

export const CardGrowStyled = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--card-color);
  padding-block: 1.625rem;
  padding-inline: 1.25rem;
  .card-detail,
  .card-grow {
    display: flex;
    flex-direction: column;
    gap: 1.375rem;
  }
  .card-grow {
    align-items: flex-end;
    justify-content: space-around;
    font: var(--mobile-smallTextBold);
    &.is-red {
      color: var(--yt-color);
    }
    &.is-green {
      color: var(--just-green);
    }
  }
  .title {
    color: var(--just-gray);
    font: var(--mobile-smallTextBold);
    text-transform: capitalize;
  }
  .stat {
    color: var(--just-black);
    font: var(--mobile-statsGrow);
  }
`;
