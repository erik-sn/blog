import * as React from 'react';

class Scrolltotop extends React.Component<any, {}> {

  public render(): JSX.Element {
    return this.props.children;
  }

  private componentDidUpdate(prevProps: any, prevState: any) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
}

export default Scrolltotop;
