import SocialStatsCard from '../social-stats-card/social-stats-card.component';
import { SocialStatsListStyled } from './social-stats-list.styled';

function SocialStatsList({ stats }) {
  return (
    <SocialStatsListStyled>
      {stats.map(stat => (
        <SocialStatsCard key={stat.id} stat={stat} />
      ))}
    </SocialStatsListStyled>
  );
}

export default SocialStatsList;
