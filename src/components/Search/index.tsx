import { styled } from '@mui/material/styles';
import {
  VscRefresh,
  VscNewFile,
  VscClearAll,
  VscCollapseAll,
  VscRegex,
  VscCaseSensitive,
  VscWholeWord,
  VscPreserveCase,
  VscReplaceAll,
  VscBook,
  VscEllipsis,
  VscExclude,
} from 'react-icons/vsc';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@atoms/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import containerStyles from './index.styles';
import { useEffect, useRef, useState } from 'react';

const Container = styled(Box)`
  ${containerStyles}
`;

const Search = () => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLInputElement>();

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };

  useEffect(() => {
    !toggle && ref.current.focus();
  }, [toggle]);
  return (
    <Container>
      <Box className="header">
        <Tooltip title="Search" placement="bottom">
          <Typography variant="caption">Search</Typography>
        </Tooltip>
        <Box>
          <Tooltip title="Refresh">
            <IconButton size="small">
              <VscRefresh />
            </IconButton>
          </Tooltip>
          <Tooltip title="Clear Search Results">
            <IconButton size="small">
              <VscClearAll />
            </IconButton>
          </Tooltip>
          <Tooltip title="Open New Search Editor">
            <IconButton size="small">
              <VscNewFile />
            </IconButton>
          </Tooltip>
          <Tooltip title="Collapse All">
            <IconButton size="small">
              <VscCollapseAll />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box className="wrapper">
        <TextField
          inputRef={ref}
          size="small"
          fullWidth
          placeholder="Search"
          onFocus={(e) => (e.target.placeholder = 'Search (↑↓ for history)')}
          onBlur={(e) => (e.target.placeholder = 'Search')}
          endAdornment={
            <InputAdornment position="end">
              <Tooltip title="Match Case">
                <IconButton size="small">
                  <VscCaseSensitive />
                </IconButton>
              </Tooltip>
              <Tooltip title="Match Whole Word">
                <IconButton size="small">
                  <VscWholeWord />
                </IconButton>
              </Tooltip>
              <Tooltip title="Use Regular Expression">
                <IconButton size="small">
                  <VscRegex />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          }
        />
        <Box>
          <TextField
            size="small"
            placeholder="Replace"
            endAdornment={
              <InputAdornment position="end">
                <Tooltip title="Preserve Case">
                  <IconButton size="small">
                    <VscPreserveCase />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            }
          />
          <Tooltip title="Replace All">
            <IconButton size="small">
              <VscReplaceAll />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box className="toggle-wrapper">
        <Tooltip title="Toggle Search Details">
          <IconButton onClick={handleToggle}>
            <VscEllipsis />
          </IconButton>
        </Tooltip>
      </Box>
      {toggle && (
        <Box className="wrapper">
          <FormControl variant="standard">
            <InputLabel>files to include</InputLabel>
            <TextField
              size="small"
              fullWidth
              autoFocus
              endAdornment={
                <InputAdornment position="end">
                  <Tooltip title="Search only in Open Editors">
                    <IconButton size="small">
                      <VscBook />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel>files to exclude</InputLabel>
            <TextField
              size="small"
              fullWidth
              endAdornment={
                <InputAdornment position="end">
                  <Tooltip title="Use Exclude settings and Ignore Files">
                    <IconButton size="small">
                      <VscExclude />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      )}
    </Container>
  );
};

export default Search;
