import { ErrorInfo, FC, forwardRef, ReactElement } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import Button from '@mui/material/Button';
import Dialog from '@atoms/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

type ErrorDialogProps = {
  error: Nullable<Error>;
  errorInfo: Nullable<ErrorInfo>;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ErrorDialog: FC<ErrorDialogProps> = ({ error, errorInfo }) => {
  const handleRefresh = () => {
    localStorage.removeItem('_files');
    window.location.reload();
  };

  return (
    <Dialog open TransitionComponent={Transition} className="errorDialogContainer">
      <DialogTitle>Something went wrong</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {error.toString()}
          <br />
          {errorInfo.componentStack}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRefresh}>Refresh</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;
