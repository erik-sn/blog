import * as React from 'react';
import { Link } from 'react-router-dom';

interface IPromptAll {
  toggleSearch: () => void;
}

const PromptAll = ({ toggleSearch }: IPromptAll) => (
  <div
    className="search_results__prompt-container"
    onClick={toggleSearch}
  >
    <Link to="/search">Show All Results</Link>
  </div>
);

export default PromptAll;
