import { styled } from '@mui/material/styles';
import { VscGear } from 'react-icons/vsc';
import { MdVerified } from 'react-icons/md';
import Accordion from '@atoms/Accordion';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@atoms/TextField';
import Typography from '@mui/material/Typography';
import { useExtension } from '@hooks';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const ExtensionsAccordion = () => {
  const extensions = useExtension();

  return (
    <Container>
      <Box margin="8px 8px 32px">
        <TextField fullWidth placeholder="Search Extensions in Marketplace" />
      </Box>
      <Accordion>
        <Accordion.Summary>
          <Box display="flex" width="100%" justifyContent="space-between">
            <Typography variant="body2">Installed</Typography>
            <Typography variant="body2">0</Typography>
          </Box>
        </Accordion.Summary>
      </Accordion>
      <Accordion>
        <Accordion.Summary>
          <Box display="flex" width="100%" justifyContent="space-between">
            <Typography variant="body2">Popular</Typography>
          </Box>
        </Accordion.Summary>
        <Accordion.Details>
          <List>
            {extensions.map((e) => (
              <ListItem key={e.name}>
                <ListItemAvatar>
                  <Avatar src={e.logo} />
                </ListItemAvatar>
                <ListItemText
                  secondaryTypographyProps={{ component: 'div' }}
                  primary={e.name}
                  secondary={
                    <Box className="secondary-wrapper">
                      <Typography variant="body2">{e.description}</Typography>
                      <Box>
                        <Button variant="text" startIcon={e.verified ? <MdVerified /> : null}>
                          {e.publisher}
                        </Button>
                        <IconButton>
                          <VscGear />
                        </IconButton>
                      </Box>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Accordion.Details>
      </Accordion>
      <Accordion>
        <Accordion.Summary>
          <Box display="flex" width="100%" justifyContent="space-between">
            <Typography variant="body2">Recommended</Typography>
            <Typography variant="body2">0</Typography>
          </Box>
        </Accordion.Summary>
      </Accordion>
    </Container>
  );
};

export default ExtensionsAccordion;
