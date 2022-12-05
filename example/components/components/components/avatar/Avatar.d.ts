import React from 'react';
export declare function Avatar(props: AvatarProps): JSX.Element;
export declare namespace Avatar {
    var defaultProps: {
        bgClassName: string;
        radius: string;
        size: string;
    };
}
export interface AvatarProps {
    /**
     * Enter value for `alt` attribute of `img` tag. Use it if you are using `imgSrc` prop.
     */
    alt?: string;
    /**
     * Enter value for `bg-*` class.
     * Also, you can pass `HEX` value like `#000000` or `#fff`
     * Example: `red-500
     * @default "green-500"
     */
    bgClassName?: string;
    className?: React.HTMLAttributes<HTMLElement>['className'];
    imgSrc?: string;
    /**
     * Enter value for `rounded-*` class. Default value is `md`. You can't add px values.
     * @default "md"
     */
    radius?: string;
    randomColor?: boolean;
    /**
     * Enter value for `h-*` and `w-*` class.
     * @default "8"
     */
    size?: string;
    /**
     * We will parse the string and get the `first letter of first two words`. If it's only one word, `we will get the first two letters`.
     */
    value?: string;
    /**
     * Adds a border to the avatar with the same color as the text's color
     */
    withBorder?: boolean;
}
