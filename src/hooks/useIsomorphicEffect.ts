import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicEffect =
  typeof document !== 'undefined' ? useLayoutEffect : useEffect;

// thx to: https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-isomorphic-effect/use-isomorphic-effect.ts
