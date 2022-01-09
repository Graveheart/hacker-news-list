import React, { ErrorInfo } from 'react';

type ErrorState = {
  readonly hasError: boolean;
};

type ErrorBoundaryProps = React.PropsWithChildren<Record<string, unknown>>;

class ErrorBoundary extends React.PureComponent<
  ErrorBoundaryProps,
  ErrorState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong.</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
