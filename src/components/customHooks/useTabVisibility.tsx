import { useCallback, useEffect, useState } from 'react';

const useTabVisibility = (callback: (isVisible: boolean)=>void) => {
  const handleVisibilityChange = useCallback(()=>{callback(document.visibilityState === 'visible')}, [callback]);
  useEffect( ()=>{
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [callback]);
};

export default useTabVisibility;