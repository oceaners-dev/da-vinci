/// <reference types="react" />
export declare function useClickOutside<T extends HTMLElement = any>(handler: () => void, events?: string[] | null, nodes?: HTMLElement[]): import("react").MutableRefObject<T | undefined>;
