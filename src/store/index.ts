import { configureStore } from '@reduxjs/toolkit';
import medicalsReducer from '../utils';
import { addMedical } from '../utils';

export default configureStore({
  reducer: {
    medicals: medicalsReducer
  }
});
