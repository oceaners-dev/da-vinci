import React from 'react';
export declare function Button(props: ButtonProps): JSX.Element;
export declare namespace Button {
    var defaultProps: {
        btnType: string;
        isActive: boolean;
    };
}
export interface HtmlButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Colour type of button.
     * @defaults 'primary'
     */
    btnType?: 'primary' | 'secondary' | 'negative' | 'positive';
    children: React.ReactNode;
    className?: React.HTMLAttributes<HTMLButtonElement>['className'] | React.HTMLAttributes<HTMLAnchorElement>['className'];
    icon?: React.ReactNode;
    isActive?: boolean;
    onClick: React.HTMLAttributes<HTMLButtonElement>['onClick'];
}
/**
 * @param children - The content of the button.
 * @param icon - The icon of the button.
 * @param className - The className of the button.
 * @param isActive - You can set "active" the button. It will seems like it's hovered. Useful in navigation.
 */
export declare type ButtonProps = HtmlButtonProps;
