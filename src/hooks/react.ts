import {
  useState,
  Dispatch,
  SetStateAction,
  MutableRefObject,
  useEffect,
  useRef,
} from "react";

export const useRefState = <T>(
  initialValue: T,
  useStateFunction: typeof useState<T> = useState<T>,
): [T, Dispatch<SetStateAction<T>>, MutableRefObject<T>] => {
  const [state, setState] = useStateFunction(initialValue);
  const stateRef = useRef<T>(state);
  useEffect(() => void (stateRef.current = state), [state]);
  return [state, setState, stateRef];
};
