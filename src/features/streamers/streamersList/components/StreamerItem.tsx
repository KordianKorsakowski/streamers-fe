import {
  Cell,
  ContentContainer,
  ItemList,
} from '../style/StreamersListStyles.styles';
import { StreamerItemInterface } from '../types/types';

export const StreamerItem: React.FC<StreamerItemInterface> = ({
  id,
  description,
  name,
  platfromType,
}) => {
  return (
    <ItemList>
      <ContentContainer>
        <Cell>{id}</Cell>
        <Cell>{description}</Cell>
        <Cell>{name}</Cell>
        <Cell>{platfromType}</Cell>
      </ContentContainer>
      <div>
        <p>+</p>
        <p>-</p>
      </div>
    </ItemList>
  );
};
