import * as React from 'react';
interface LoaderOptions {
    containerStyles: any;
    innerStyles: any;
    barStyles: any;
    dataStyles: any;
    dataInterpolation: (p: number) => string;
    initialState: (active: boolean) => boolean;
}
export declare function Loader({ containerStyles, innerStyles, barStyles, dataStyles, dataInterpolation, initialState, }: Partial<LoaderOptions>): React.JSX.Element | null;
export {};
