import { TopCardStyled } from './top-card.styled';
import ArrowUpIcon from '../../../assets/icon-up.svg';
import ArrowDowIcon from '../../../assets/icon-down.svg';

function TopCard({ stat }) {
  const isSubscriber =
    stat.social_media === 'youtube' ? 'subscribers' : 'followers';
  const color = stat.social_media === 'youtube' ? 'is-red' : 'is-green';
  const icon = stat.social_media === 'youtube' ? ArrowDowIcon : ArrowUpIcon;

  return (
    <TopCardStyled className={stat.social_media}>
      <div className="card-social__heading">
        <img src={stat.icon} alt={`${stat.social_media} icon`} />
        <span>{stat.username}</span>
      </div>
      <div className="card-social__detail">
        <h3>{stat.grow}</h3>
        <span>{isSubscriber}</span>
      </div>
      <div className={`card-social__footer ${color}`}>
        <img src={icon} width={8} height={4} alt="icon grow" />
        <span>{stat.current_stat_today}</span>
        <span>today</span>
      </div>
    </TopCardStyled>
  );
}

export default TopCard;
