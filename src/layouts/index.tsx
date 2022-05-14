import { Fragment } from 'react';
import AppHeader from '@layouts/AppHeader';
import AppFooter from '@layouts/AppFooter';
import AppMain from '@layouts/AppMain';

const Layouts = () => {
  return (
    <Fragment>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </Fragment>
  );
};

export default Layouts;
