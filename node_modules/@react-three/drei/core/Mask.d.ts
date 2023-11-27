import * as THREE from 'three';
import { ForwardRefComponent } from '../helpers/ts-utils';
type Props = Omit<JSX.IntrinsicElements['mesh'], 'id'> & {
    id: number;
    colorWrite?: boolean;
    depthWrite?: boolean;
};
export declare const Mask: ForwardRefComponent<Props, THREE.Mesh>;
export declare function useMask(id: number, inverse?: boolean): {
    stencilWrite: boolean;
    stencilRef: number;
    stencilFunc: THREE.StencilFunc;
    stencilFail: THREE.StencilOp;
    stencilZFail: THREE.StencilOp;
    stencilZPass: THREE.StencilOp;
};
export {};
