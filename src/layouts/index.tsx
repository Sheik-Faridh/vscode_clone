import AppDialog from './AppDialog';
import AppHeader from '@layouts/AppHeader';
import AppFooter from '@layouts/AppFooter';
import AppMain from '@layouts/AppMain';
import ErrorBoundary from '@components/ErrorBoundary';
import { useShortcuts } from '@hooks';

const Layouts = () => {
  useShortcuts();
  return (
    <ErrorBoundary>
      <AppHeader />
      <AppMain />
      <AppFooter />
      <AppDialog />
    </ErrorBoundary>
  );
};

export default Layouts;
