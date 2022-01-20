import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const logger = ({ dispatch, getState }) => (next) => (action) => {
  // my middlware
  console.log('ACTION', action);
  next(action);
};


// const thunk=({dispatch,getState})=>(next)=>(action)=>{

//   if(typeof action=='function'){
//     action(dispatch);
//     return ;
//   }

//   next(action);
// }


const store=createStore(rootReducer,applyMiddleware(logger,thunk));
console.log(store.getState());


// export const StoreContext=createContext();

// console.log("frc",StoreContext)

// class Provider extends React.Component{
//   render(){
//     const {store}=this.props;
//     return (
//     <StoreContext.Provider value={store}>
//       {this.props.children}
//     </StoreContext.Provider>
//     )
//   }
// }

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
