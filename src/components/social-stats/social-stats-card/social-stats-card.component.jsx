import { CardSocialStatStyled } from './social-stats-card.styled';

function SocialStatsCard({ stat }) {
  const isSubscriber =
    stat.social_media === 'youtube' ? 'subscribers' : 'followers';
  const color = stat.social_media === 'youtube' ? 'is-red' : 'is-green';

  return (
    <CardSocialStatStyled className={stat.social_media}>
      <div className="card-social__heading">
        <img src={stat.icon} alt={`${stat.social_media} icon`} />
        <span>{stat.username}</span>
      </div>
      <div className="card-social__detail">
        <h3>{stat.grow}</h3>
        <span>{isSubscriber}</span>
      </div>
      <div className={`card-social__footer ${color}`}>
        <span>{stat.current_stat_today}</span>
        <span>today</span>
      </div>
    </CardSocialStatStyled>
  );
}

export default SocialStatsCard;
