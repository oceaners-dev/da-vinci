import React from 'react';
export declare function NotificationProvider({ defaultSettings, }: {
    defaultSettings?: NotificationTypeDefaults;
}): any;
export declare type NotificationPosition = 'top' | 'bottom' | 'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight';
/**
 * Type of the notification. Can be `success`, `info`, `warning`, `error`. Default is `success`.
 * */
export declare type NotificationTypes = 'success' | 'info' | 'warning' | 'error';
/**
 * @description Message type for Notification
 * @author fers4t
 * @param {string} duration - Duration of notification as ms
 * @param {string} title - Title of notification
 * @param {string} content - Content of notification
 * @param {NotificationPosition} position - Position of notification
 */
export interface NotificationSettings {
    /**
     * @description You can pass CSS classes to notification.
     */
    className?: string;
    /**
     * @description Duration of notification as ms. Set is `0` for `disable auto closing`.
     */
    /**
     * @description Content of the notification.
     */
    content: React.ReactNode;
    duration?: number;
    /**
     * @description Title of the notification. Default is `Success`.
     */
    /**
     * @description You can pass `emoji` icon.
     */
    icon?: string;
    /**
     * @description Positions of the notification.
     * @enum `top`, `bottom`, `topLeft`, `bottomLeft`, `topRight`, `bottomRight`
     */
    position?: NotificationPosition;
    title?: React.ReactNode;
}
export interface ToastProps extends NotificationSettings {
    type: NotificationTypes;
}
export interface NotificationTypeDefaults {
    error?: Omit<NotificationSettings, 'content'>;
    info?: Omit<NotificationSettings, 'content'>;
    success?: Omit<NotificationSettings, 'content'>;
    warning?: Omit<NotificationSettings, 'content'>;
}
export declare const toast: {
    success: (settings: NotificationSettings) => void;
    info: (settings: NotificationSettings) => void;
    warning: (settings: NotificationSettings) => void;
    error: (settings: NotificationSettings) => void;
};
export declare const Notification: {
    Provider: typeof NotificationProvider;
    toast: {
        success: (settings: NotificationSettings) => void;
        info: (settings: NotificationSettings) => void;
        warning: (settings: NotificationSettings) => void;
        error: (settings: NotificationSettings) => void;
    };
};
