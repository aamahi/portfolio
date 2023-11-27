import { MeshStandardMaterial, MeshStandardMaterialParameters, Shader } from 'three';
import { ForwardRefComponent } from '../helpers/ts-utils';
type WobbleMaterialType = JSX.IntrinsicElements['meshStandardMaterial'] & {
    time?: number;
    factor?: number;
    speed?: number;
};
type Props = WobbleMaterialType & {
    speed?: number;
    factor?: number;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            wobbleMaterialImpl: WobbleMaterialType;
        }
    }
}
interface Uniform<T> {
    value: T;
}
declare class WobbleMaterialImpl extends MeshStandardMaterial {
    _time: Uniform<number>;
    _factor: Uniform<number>;
    constructor(parameters?: MeshStandardMaterialParameters);
    onBeforeCompile(shader: Shader): void;
    get time(): number;
    set time(v: number);
    get factor(): number;
    set factor(v: number);
}
export declare const MeshWobbleMaterial: ForwardRefComponent<Props, WobbleMaterialImpl>;
export {};
