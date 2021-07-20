import styled from 'styled-components';

export const CardSocialStatStyled = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-block-start: 2rem;
  padding-block-end: 1.5rem;
  background-color: var(--card-color);
  border-radius: 0.25rem;
  overflow: hidden;

  &::before {
    position: absolute;
    content: '';
    display: block;
    inset: 0;
    block-size: 0.25rem;
    background-color: red;
  }
  &.facebook::before {
    background-color: var(--fb-color);
  }
  &.twitter::before {
    background-color: var(--tw-color);
  }
  &.instagram::before {
    background: var(--ig-color);
  }
  &.youtube::before {
    background-color: var(--yt-color);
  }
  .card-social__heading {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
      font: var(--mobile-smallTextBold);
      color: var(--just-gray);
    }
  }
  .card-social__detail {
    text-align: center;
    padding-block-start: 1.75rem;
    padding-block-end: 1.5625rem;
    h3 {
      margin: 0;
      font: var(--mobile-statsGrow);
      color: var(--just-black);
    }
    span {
      text-transform: uppercase;
      color: var(--just-gray);
      letter-spacing: 5px;
    }
  }
  .card-social__footer {
    display: flex;
    gap: 0.25rem;
    font: var(--mobile-smallStat);
    &.is-red {
      color: var(--yt-color);
    }
    &.is-green {
      color: var(--just-green);
    }
  }
`;
