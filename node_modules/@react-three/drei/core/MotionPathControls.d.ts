import * as THREE from 'three';
import * as React from 'react';
type MotionState = {
    current: number;
    path: THREE.CurvePath<THREE.Vector3>;
    focus: React.MutableRefObject<THREE.Object3D> | [x: number, y: number, z: number] | undefined;
    object: React.MutableRefObject<THREE.Object3D>;
    offset: number;
    point: THREE.Vector3;
    tangent: THREE.Vector3;
    next: THREE.Vector3;
};
export declare function useMotion(): MotionState;
export declare const MotionPathControls: React.ForwardRefExoticComponent<React.RefAttributes<THREE.Group>>;
export {};
