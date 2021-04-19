import React, { useContext } from 'react';
import NotFound from '../../../utils/assets/404.gif';
import { store } from '../../../state/store';

import { Message, Image } from './style';

const NoResults = () => {
  const globalState = useContext(store);
  return (
    <>
      <Image src={NotFound} alt="Not Found " />
      <Message dark={globalState.state.darkMode ? 'true' : undefined}>
        No results found!
      </Message>
    </>
  );
};

export default NoResults;
