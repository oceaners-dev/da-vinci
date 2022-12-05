import React from 'react';
declare const NavContext: React.Context<{
    isExpanded?: boolean | undefined;
    setIsExpanded: (isExpanded: boolean) => void;
}>;
declare const NavProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export { NavContext, NavProvider };
