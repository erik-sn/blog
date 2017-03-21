import { connect as reduxConnect} from 'react-redux';

function connect(mapStateToProps: any, mapDispatchToProps: any = null) {
  return (target: any) => {
    return (reduxConnect(mapStateToProps, mapDispatchToProps)(target)) as any;
  };
};

export default connect;
