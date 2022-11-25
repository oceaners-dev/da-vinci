declare const navigationStore: import("zustand").UseBoundStore<import("zustand").StoreApi<{
    isExpanded: boolean;
    setIsExpanded: (isExpanded: boolean) => void;
}>>;
export { navigationStore };
