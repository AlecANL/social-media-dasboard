import SocialGrowCard from '../social-grow-card/social-grow-card.component';
import { SocialGrowListStyled } from './social-grow.list.styled';

function SocialGrowList({ stats }) {
  return (
    <SocialGrowListStyled>
      {stats.map(stat => (
        <SocialGrowCard key={stat.id} stat={stat} />
      ))}
    </SocialGrowListStyled>
  );
}

export default SocialGrowList;
