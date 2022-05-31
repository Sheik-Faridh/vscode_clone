import { styled } from '@mui/material/styles';
import { GoMarkGithub } from 'react-icons/go';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const SourceControl = () => {
  return (
    <Container>
      <Box className="header">
        <Tooltip title="Source Control (Ctrl+Shift+G G)" placement="bottom">
          <Typography variant="caption">Source Control</Typography>
        </Tooltip>
      </Box>
      <Box>
        <Typography variant="body2">
          The folder currently open doesn't have a git repository. You can initialize a repository which will enable
          source control features powered by git.
        </Typography>
        <Button fullWidth variant="contained" color="primary">
          Initialize Repository
        </Button>
        <Typography variant="body2">
          To learn more about how to use git and source in VS Code
          <Link target="_blank" href="https://code.visualstudio.com/docs/editor/versioncontrol" underline="none">
            read our docs
          </Link>
        </Typography>
        <Typography variant="body2">
          You can also directly publish this folder to a GitHub respository. Once published, you'll have access to
          source control features powered by git and GitHub
        </Typography>
        <Button fullWidth variant="contained" startIcon={<GoMarkGithub />} color="primary">
          Publish to Github
        </Button>
      </Box>
    </Container>
  );
};

export default SourceControl;
