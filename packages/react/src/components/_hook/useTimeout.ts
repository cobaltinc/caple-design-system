import { useRef, useEffect } from 'react';

type Callback = () => void;

export default (callback: Callback, delay: number) => {
  const savedCallback = useRef<Callback>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    const id = setTimeout(tick, delay);
    return () => clearTimeout(id);
  }, [delay]);
};