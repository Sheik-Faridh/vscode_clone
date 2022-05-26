import { styled } from '@mui/material/styles';
import { VscGear } from 'react-icons/vsc';
import Accordion from '@atoms/Accordion';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@atoms/TextField';
import Typography from '@mui/material/Typography';
import useExtension from 'hooks/useExtensions';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

const ExtensionsAccordion = () => {
  const extensions = useExtension();
  return (
    <Container>
      <Box margin="8px">
        <TextField fullWidth placeholder="Search Extensions in Marketplace" />
      </Box>
      <Accordion>
        <Accordion.Summary>
          <Typography variant="body2">Installed</Typography>
        </Accordion.Summary>
        <Accordion.Details>
          <List>
            {extensions.map((e) => (
              <ListItem key={e.name}>
                <ListItemAvatar>
                  <Avatar src={e.logo} />
                </ListItemAvatar>
                <ListItemText
                  primary={e.name}
                  secondary={
                    <Box>
                      <Typography variant="body2">{e.description}</Typography>
                      <IconButton size="small">
                        <VscGear />
                      </IconButton>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Accordion.Details>
      </Accordion>
    </Container>
  );
};

export default ExtensionsAccordion;
