export declare function useEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (event: HTMLElementEventMap[K]) => void, element: HTMLElement): void;
export declare function useEventListener<K extends keyof DocumentEventMap>(type: K, listener: (event: DocumentEventMap[K]) => void, element: Document): void;
export declare function useEventListener<K extends keyof WindowEventMap>(type: K, listener: (event: WindowEventMap[K]) => void, element?: Window): void;
