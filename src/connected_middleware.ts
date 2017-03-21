export const CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

export default function routerMiddleware(history: any): any {
  return ({ dispatch }: any) => {
    history.listen((payload: any) => dispatch({
      type: LOCATION_CHANGE,
      payload,
    }));
    return (next: any) => (action: any) => {
      if (action.type !== CALL_HISTORY_METHOD) {
        return next(action);
      }
      const { payload: { method, args } } = action;
      history[method](...args);
    };
  };
}
