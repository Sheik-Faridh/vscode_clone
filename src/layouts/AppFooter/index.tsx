import styled from '@emotion/styled';
import StatusBar from '@components/StatusBar';
import footerStyles from './index.styles';

const Footer = styled.footer`
  ${footerStyles}
`;

const AppFooter = () => {
  return (
    <Footer>
      <StatusBar />
    </Footer>
  );
};

export default AppFooter;
