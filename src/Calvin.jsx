import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

export default function Calvin(props) {
	const { nodes } = useGLTF('/calvin.glb');

	// Create a custom material
	const customMaterial = new MeshStandardMaterial({
		color: 'black', // You can change this to any color you want
		metalness: 1.0, // Adjust this value between 0 and 1
		roughness: 0.0, // Adjust this value between 0 and 1
	});

	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				geometry={nodes.Curve001.geometry}
				material={customMaterial}
				position={[3.465, 0, -4.957]}
				scale={185.174}
			/>
		</group>
	);
}

useGLTF.preload('/calvin.glb');
