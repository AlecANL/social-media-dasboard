import SocialStatsCard from '../social-stats-card/social-stats-card.component';

function SocialStatsList({ stats }) {
  return (
    <>
      {stats.map(stat => (
        <SocialStatsCard key={stat.id} stat={stat} />
      ))}
    </>
  );
}

export default SocialStatsList;
