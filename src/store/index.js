import { configureStore } from '@reduxjs/toolkit'
import goodsReduser from './slice/goodsSlice';

export default configureStore({
  reducer: {
      goods: goodsReduser,
  },
})