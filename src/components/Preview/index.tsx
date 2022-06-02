import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

type PreviewProps = {
  content: string;
};

const Preview: FC<PreviewProps> = ({ content }) => {
  return (
    <Container>
      <img src={content} />
    </Container>
  );
};

export default Preview;
