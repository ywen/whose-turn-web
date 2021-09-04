import store from './store';
import getDataFromDoc from './getDataFromDoc';

const storesAndDispatchTypes = [
  {
    storeFunc: store.kidsStore,
    dispatchType: 'KIDS_CHANGED',
  },
];

const listenToData = ({ dispatch }) => {
  storesAndDispatchTypes.forEach(({ storeFunc, dispatchType }) => {
    storeFunc()?.onSnapshot((doc) => {
      const data = getDataFromDoc({ doc });
      dispatch({ type: dispatchType, data });
    });
  });
};

export default listenToData;
