import { StreamModel } from '../types/type';
import { StreamItem } from './StreamItem';

export const StreamsList: React.FC<{ streams: StreamModel[] }> = ({
  streams,
}) => {
  return (
    <div
      style={{
        width: '600px',
        margin: '0 auto 0 auto',
      }}
    >
      <h4>Streams's List</h4>
      <ul>
        {streams.map((stream) => {
          return <StreamItem stream={stream} />;
        })}
      </ul>
    </div>
  );
};
