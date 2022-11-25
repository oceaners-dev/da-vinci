import React from 'react';
import { ForwardRefWithStaticComponents } from '../../utils/ts/forward-ref-with-static-component';
import { CheckboxGroup } from './group';
/**
 * Layers are `unselectable` (`::selection: none`) by default. If you want to make it selectable, you can use the `selectable` prop.
 */
export declare const CheckBox: CheckboxComponent;
export declare type CheckboxComponent = ForwardRefWithStaticComponents<CheckboxProps, {
    Group: typeof CheckboxGroup;
}>;
/**
 * Layers are `unselectable`. by default. If you want to make it selectable, you can use the `selectable` prop.
 */
export interface CheckboxProps {
    /**
     * This prop is uncontrollable. If you set it true, you can't change it with click.
     * This is `defualt` input behavior.
     * If you want to change it with click, use `defaultChecked` prop.
     */
    checked?: boolean;
    /**
     * For wrapper div.
     */
    className?: string;
    /**
     * Custom tick box icon. Use tailwind classes for style `selected` and `unselected` states.
     */
    customIcon?: React.ReactNode;
    /**
     * @type boolean
     */
    defaultChecked?: boolean;
    disabled?: boolean;
    extraInfo?: React.ReactNode;
    /**
     * Just `hides` the tick box between the label. If you use `customIcon` it's hiding automatically.
     */
    hideCheckbox?: boolean;
    label?: React.ReactNode;
    /**
     * We don't know why but some of UI libraries lets name optional. We do not want to
     * compare labels or some hacky things. Please provide a name.
     */
    name: string;
    /**
     * @returns `true` if checked, `false` if unchecked.
     */
    onChangeChecked?: (checked: boolean) => void;
    /**
     * @returns event directly. if you want to get `booleam` value, use `onChangeChecked`
     */
    onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Layers are `unselectable`. by default. If you want to make it selectable, you can use the `selectable` prop.
     */
    selectableLabel?: boolean;
    type?: 'default' | 'radio' | 'card' | 'pureCard';
}
