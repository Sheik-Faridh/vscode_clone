import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import SplashScreenLogoSrc from '@assets/images/splash_screen_logo.png';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import paperStyles from './index.styles';
import { useRef } from 'react';

const StyledPaper = styled(Paper)`
  ${paperStyles}
`;

const SplashScreen = () => {
  const containerRef = useRef<HTMLDivElement>();
  return (
    <StyledPaper ref={containerRef}>
      <Slide direction="down" in mountOnEnter unmountOnExit timeout={{ enter: 1000 }} container={containerRef.current}>
        <Box>
          <img src={SplashScreenLogoSrc} alt="Logo" />
        </Box>
      </Slide>
      <Fade in timeout={{ enter: 1500 }}>
        <Typography variant="body2">Visual Studio Code</Typography>
      </Fade>
    </StyledPaper>
  );
};

export default SplashScreen;
