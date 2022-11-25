import React from 'react';
declare type Ref<T> = React.Dispatch<React.SetStateAction<T>> | React.ForwardedRef<T>;
export declare function mergeRefs<T = any>(...refs: Ref<T>[]): (node: T | null) => void;
export declare function useMergedRef<T = any>(...refs: Ref<T>[]): (node: T | null) => void;
export declare function assignRef<T = any>(ref: React.ForwardedRef<T>, value: T | null): void;
export {};
