/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function LuckyLuke(props) {
	const { nodes, materials } = useGLTF('/LuckyLuke.glb');
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Curve037.geometry}
				material={materials['SVGMat.001']}
				position={[1.01, 0, -1.504]}
				scale={35.345}
			/>
		</group>
	);
}

useGLTF.preload('/LuckyLuke.glb');
