import { FC } from 'react';
import { styled } from '@mui/material/styles';
import * as domPurify from 'dompurify';
import { marked } from 'marked';
import Box from '@mui/material/Box';
import containerStyles from './index.styles';

const Container = styled(Box)`
  ${containerStyles}
`;

type PreviewProps = {
  content: string;
  type: string;
};

const Preview: FC<PreviewProps> = ({ content, type }) => {
  if (type === 'image')
    return (
      <Container>
        <Box>
          <img className="image-preview" src={content} />
        </Box>
      </Container>
    );
  if (type === 'markdown')
    return (
      <Container
        className="markdown-preview markdown-body"
        dangerouslySetInnerHTML={{ __html: domPurify.sanitize(marked.parse(content)) }}
      />
    );
  return null;
};

export default Preview;
