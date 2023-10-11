import PropTypes from 'prop-types';
import Context from './Context';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const ContextProvider = ({children}) => {
  const [sign, setSign] = useState([]);

  const signIn = () => {
    e.preventDefault();
    console.log('teste');
  }

  const contextValue = {
    signIn,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  )
}

ContextProvider.prototype = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;