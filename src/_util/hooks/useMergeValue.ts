import React, { useState, useEffect, useRef } from 'react';
import { isUndefined } from '../is';

// TODO 感觉不是很好呢
export default function useMergeValue<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
  },
): [T, React.Dispatch<React.SetStateAction<T>>, T] {
  const { defaultValue, value } = props || {};
  const firstRenderRef = useRef(true);

  const [stateValue, setStateValue] = useState<T>(
    !isUndefined(value) ? value : !isUndefined(defaultValue) ? defaultValue : defaultStateValue,
  );

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setStateValue(value!);
    }
  }, [value]);
  const mergedValue = isUndefined(value) ? stateValue : value;

  return [mergedValue, setStateValue, stateValue];
}
