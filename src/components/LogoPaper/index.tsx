import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import LogoIcon from '@assets/svg/logo.svg';
import paperStyles from './index.styles';

const StyledPaper = styled(Paper)`
  ${paperStyles}
`;

const LogoPaper = () => {
  return (
    <StyledPaper>
      <LogoIcon />
    </StyledPaper>
  );
};

export default LogoPaper;
