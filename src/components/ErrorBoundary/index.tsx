import { Component, ErrorInfo } from 'react';
import { Props } from '@models';
import ErrorDialog from '@components/ErrorDialog';

type ErrorBoundaryState = {
  hasError: boolean;
  error: Nullable<Error>;
  errorInfo: Nullable<ErrorInfo>;
};

export default class ErrorBoundary extends Component<Props, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null, errorInfo: null };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) return <ErrorDialog error={this.state.error} errorInfo={this.state.errorInfo} />;

    return this.props.children;
  }
}
