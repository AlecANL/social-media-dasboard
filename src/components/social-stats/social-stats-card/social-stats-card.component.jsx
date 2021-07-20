import {
  CardSocialStatStyled,
  CardHeadingStyled,
} from './social-stats-card.styled';

function SocialStatsCard({ stat }) {
  return (
    <CardSocialStatStyled>
      <CardHeadingStyled>
        <img src={stat.icon} alt={`${stat.social_media} icon`} />
        <span>{stat.username}</span>
      </CardHeadingStyled>
      <div>
        <h3></h3>
        <span></span>
      </div>
      <span></span>
    </CardSocialStatStyled>
  );
}

export default SocialStatsCard;
