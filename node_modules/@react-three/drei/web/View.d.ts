import * as React from 'react';
import * as THREE from 'three';
type LegacyCanvasSize = {
    height: number;
    width: number;
};
type CanvasSize = LegacyCanvasSize & {
    top: number;
    left: number;
};
export type ContainerProps = {
    scene: THREE.Scene;
    index: number;
    children?: React.ReactNode;
    frames: number;
    rect: React.MutableRefObject<DOMRect>;
    track: React.MutableRefObject<HTMLElement>;
    canvasSize: LegacyCanvasSize | CanvasSize;
};
export type ViewProps = {
    track: React.MutableRefObject<HTMLElement>;
    index?: number;
    frames?: number;
    children?: React.ReactNode;
};
export declare const View: ({ track, index, frames, children }: ViewProps) => React.JSX.Element;
export {};
