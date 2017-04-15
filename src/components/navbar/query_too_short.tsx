import * as React from 'react';

export interface IQueryTooShortProps {
}

const QueryTooShort = ({}: IQueryTooShortProps) => (
  <div className="search_results__prompt-container" >
    At least 4 characters needed to query
  </div>
);

export default QueryTooShort;

