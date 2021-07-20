import { CardGrowStyled } from './social.grow.card.styled';

function SocialGrowCard({ stat }) {
  console.log(stat);
  const color = stat.social === 'youtube' ? 'is-red' : 'is-green';

  return (
    <CardGrowStyled>
      <div className="card-detail">
        <span className="title">{stat.name}</span>
        <span className="stat">{stat.stat}</span>
      </div>
      <div className={`card-grow ${color}`}>
        <img src={stat.icon} width={20} height={20} alt={`${stat.name} icon`} />
        <span>{stat.grow}</span>
      </div>
    </CardGrowStyled>
  );
}

export default SocialGrowCard;
