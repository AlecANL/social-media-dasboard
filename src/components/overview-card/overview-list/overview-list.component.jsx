import OverViewCard from '../card/overview-card.component';
import { OverviewListStyled } from './overview-list.styled';

function OverViewList({ stats }) {
  return (
    <OverviewListStyled>
      <h3 className="heading">Overview - Today</h3>
      <div className="grid">
        {stats.map(stat => (
          <OverViewCard key={stat.id} stat={stat} />
        ))}
      </div>
    </OverviewListStyled>
  );
}

export default OverViewList;
