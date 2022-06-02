import { Fragment } from 'react';
import AppDialog from './AppDialog';
import AppHeader from '@layouts/AppHeader';
import AppFooter from '@layouts/AppFooter';
import AppMain from '@layouts/AppMain';
import { useShortcuts } from '@hooks';

const Layouts = () => {
  useShortcuts();
  return (
    <Fragment>
      <AppHeader />
      <AppMain />
      <AppFooter />
      <AppDialog />
    </Fragment>
  );
};

export default Layouts;
