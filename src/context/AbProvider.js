import { node } from 'prop-types';
import React from 'react';
import { AbContext } from './context';

function AbProvider({ children }) {
//   const [email, setEmail] = useState('');

  const context = { teste: 'teste' };

  return (
    <AbContext.Provider value={ context }>
      { children }
    </AbContext.Provider>
  );
}

AbProvider.propTypes = {
  children: node.isRequired,
};

export default AbProvider;