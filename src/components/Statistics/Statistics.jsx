import { List } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>total:{total}</li>
      <li>positive Feedback:{positivePercentage}%</li>
    </List>
  );
};
export default Statistics;
