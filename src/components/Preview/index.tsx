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

const Markdown: FC<Pick<PreviewProps, 'content'>> = ({ content }) => (
  <Box
    className="markdown-preview markdown-body"
    dangerouslySetInnerHTML={{ __html: domPurify.sanitize(marked.parse(content)) }}
  />
);

const Preview: FC<PreviewProps> = ({ content, type }) => {
  return (
    <Container>
      {type === 'image' && <img className="image-preview" src={content} />}
      {type === 'markdown' && <Markdown content={content} />}
    </Container>
  );
};

export default Preview;
