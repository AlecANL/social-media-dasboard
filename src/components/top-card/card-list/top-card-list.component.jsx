import { TopCardListStyled } from './top-card-list.styled';
import TopCard from '../card/top-card.component';

function TopCardList({ stats }) {
  return (
    <TopCardListStyled>
      {stats.map(stat => (
        <TopCard key={stat.id} stat={stat}></TopCard>
      ))}
    </TopCardListStyled>
  );
}

export default TopCardList;
