import { useCallback, useEffect, useRef } from 'react';

const useDebounce = <T>(callback: (...args: T[]) => void, wait = 0) => {
  const ref = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      ref.current && clearTimeout(ref.current);
    };
  }, []);

  return useCallback(
    // @ts-ignore
    (...args) => {
      ref.current && clearTimeout(ref.current);
      ref.current = setTimeout(() => callback(...args), wait);
    },
    [callback, wait],
  );
};
export default useDebounce;
