import { styled } from '@mui/material/styles';
import ActivityBar from '@components/ActivityBar';
import Paper from '@mui/material/Paper';
import paperStyles from './index.styles';

const Main = styled(Paper)`
  ${paperStyles}
`;

const AppMain = () => {
  return (
    <Main>
      <ActivityBar />
    </Main>
  );
};

export default AppMain;
