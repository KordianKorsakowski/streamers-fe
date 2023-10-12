import { StreamModel } from '../types/type';
export const StreamItem: React.FC<{ stream: StreamModel }> = ({ stream }) => {
  const { id, title, game, description, averageViewers, endAt, startAt } =
    stream;

  return (
    <li>
      <div style={{ display: 'flex', gap: '10px' }}>
        <p>{id}</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>{endAt}</p>
        <p>{startAt}</p>
        <p>{averageViewers}</p>
        <p>{game}</p>
      </div>
    </li>
  );
};
