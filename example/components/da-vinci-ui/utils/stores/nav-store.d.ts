declare const navigationStore: import("zustand/vanilla").StoreApi<{
    isExpanded: boolean;
    setIsExpanded: (isExpanded: boolean) => void;
}>;
export { navigationStore };
