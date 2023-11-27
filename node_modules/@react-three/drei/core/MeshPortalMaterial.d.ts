import * as THREE from 'three';
import * as React from 'react';
import { ReactThreeFiber } from '@react-three/fiber';
export type PortalMaterialType = {
    resolution: ReactThreeFiber.Vector2;
    blur: number;
    blend: number;
    size?: number;
    sdf?: THREE.Texture;
    map?: THREE.Texture;
} & JSX.IntrinsicElements['shaderMaterial'];
declare global {
    namespace JSX {
        interface IntrinsicElements {
            portalMaterialImpl: PortalMaterialType;
        }
    }
}
export type PortalProps = JSX.IntrinsicElements['shaderMaterial'] & {
    blend?: number;
    blur?: number;
    resolution?: number;
    worldUnits?: boolean;
    eventPriority?: number;
    renderPriority?: number;
    events?: boolean;
};
export declare const MeshPortalMaterial: React.ForwardRefExoticComponent<Omit<ReactThreeFiber.ExtendedColors<ReactThreeFiber.Overwrite<Partial<THREE.ShaderMaterial>, ReactThreeFiber.NodeProps<THREE.ShaderMaterial, [THREE.ShaderMaterialParameters]>>> & {
    blend?: number | undefined;
    blur?: number | undefined;
    resolution?: number | undefined;
    worldUnits?: boolean | undefined;
    eventPriority?: number | undefined;
    renderPriority?: number | undefined;
    events?: boolean | undefined;
}, "ref"> & React.RefAttributes<PortalMaterialType>>;
