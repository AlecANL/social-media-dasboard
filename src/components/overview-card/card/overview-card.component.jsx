import { OverViewCardStyled } from './overview-card.styled';
import ArrowUpIcon from '../../../assets/icon-up.svg';
import ArrowDowIcon from '../../../assets/icon-down.svg';

function OverViewCard({ stat }) {
  const color = stat.social === 'youtube' ? 'is-red' : 'is-green';
  const icon = stat.social === 'youtube' ? ArrowDowIcon : ArrowUpIcon;

  return (
    <OverViewCardStyled>
      <div className="card-detail">
        <span className="title">{stat.name}</span>
        <span className="stat">{stat.stat}</span>
      </div>
      <div className={`card-grow ${color}`}>
        <img src={stat.icon} width={20} height={20} alt={`${stat.name} icon`} />
        <span>
          <img src={icon} alt="icon social media" />
          {stat.grow}
        </span>
      </div>
    </OverViewCardStyled>
  );
}

export default OverViewCard;
