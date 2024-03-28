import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastMessageLight } from '../utils/showToast';

const useReduxStore = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { token, user_id } = useSelector((state) => state.authRed);
  const { user } = useSelector((state) => state.userRed);
  const commonAPIData = {
    token,
    ToastMessageLight,
  };

  return {
    token,
    dispatch,
    loading,
    setLoading,
    commonAPIData,
    user_id,
    user
  };
};

export default useReduxStore;
