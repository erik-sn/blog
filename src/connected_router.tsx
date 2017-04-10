import * as invariant from 'invariant';
import * as React from 'react';
import { Component, PropTypes } from 'react';
import { Route, Router } from 'react-router-dom';

export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

class ConnectedRouter extends Component<any, any> {

  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object,
    children: PropTypes.node,
  };

  static contextTypes = {
    store: PropTypes.object,
  };

  public componentWillMount(): void {
    const { children } = this.props;

    invariant(
      children == null || React.Children.count(children) === 1,
      'A <ConnectedRouter> may have only one child element',
    );
  }

  public render(): JSX.Element {
    const { store: propsStore, history, children, ...props } = this.props;
    const store = propsStore || this.context.store;
    return (
      <Router {...props} history={history}>
        <Route render={({ location }: any) => {
            return <MountedRoute store={store} location={location} children={children} />;
          }}/>
      </Router>
    );
  }
}

class MountedRoute extends Component<any, any> {

  public location: any;
  public store: any;

   public componentWillMount(): void {
      this.location = this.props.location;
      this.store = this.props.store;

      this.props.store.dispatch({
        type: '@@router/LOCATION_CHANGE',
        payload: this.props.location,
      });
   }

   public componentWillUpdate(nextProps: any): any {
      this.store = nextProps.store;
      if (this.location.pathname != nextProps.location.pathname) {
         this.location = nextProps.location;
         this.store.dispatch({
           type: '@@router/LOCATION_CHANGE',
           payload: nextProps.location,
         });
      }
   }

   render() {
    return this.props.children;
   }
}

export default ConnectedRouter;