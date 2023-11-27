import { ReactThreeFiber } from '@react-three/fiber';
import * as THREE from 'three';
import { ForwardRefComponent } from '../helpers/ts-utils';
type Props = JSX.IntrinsicElements['lineSegments'] & {
    threshold?: number;
    color?: ReactThreeFiber.Color;
};
export declare const Edges: ForwardRefComponent<Props, THREE.LineSegments>;
export {};
