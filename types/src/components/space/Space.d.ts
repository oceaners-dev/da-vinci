export declare function Space(props: SpaceProps): JSX.Element;
export declare namespace Space {
    var defaultProps: {
        direction: string;
    };
}
interface SpaceProps {
    direction?: 'horizontal' | 'vertical';
    spacing?: number;
}
export {};
