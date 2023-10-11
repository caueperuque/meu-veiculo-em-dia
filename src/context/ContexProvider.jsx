import PropTypes from 'prop-types';
import Context from './Context';


const ContextProvider = ({children}) => {
  return (
    <Context.Provider value={ {teste: "oi"} }>
      {children}
    </Context.Provider>
  )
}

ContextProvider.prototype = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;