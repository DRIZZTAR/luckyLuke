import {
	Environment,
	OrbitControls,
	Float,
	Clouds,
	Cloud,
	Center,
	useHelper,
	SpotLight,
	Stage,
} from '@react-three/drei';
import * as THREE from 'three';
import { Perf } from 'r3f-perf';
import { Suspense, useRef } from 'react';
import { TextureLoader, DoubleSide } from 'three';
import { useLoader } from '@react-three/fiber';
import LuckyLuke from './LuckyLuke.jsx';
import Model from './Model.jsx';
import Loader from './Loader.jsx';

export default function Experience() {
	const luckyLukeTexture = useLoader(TextureLoader, '/LuckyLuke.jpg');

	// Create refs for the lights
	const directionalLightRef = useRef();
	const pointLight1Ref = useRef();
	const pointLight2Ref = useRef();
	const hemisphereLightRef = useRef();
	const spotLightRef = useRef();

	// Add helpers
	useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'red');
	useHelper(pointLight1Ref, THREE.PointLightHelper, 0.5, 'blue');
	useHelper(pointLight2Ref, THREE.PointLightHelper, 0.5, 'green');
	useHelper(hemisphereLightRef, THREE.HemisphereLightHelper, 1, 'yellow');
	useHelper(spotLightRef, THREE.SpotLightHelper, 'white');

	return (
		<>
			<OrbitControls
				makeDefault
				minDistance={2}
				maxDistance={3}
				enableZoom={true}
				enablePan={false}
				dampingFactor={0.2}
			/>

			<Environment
				backgroundIntensity={1.5}
				background
				map={luckyLukeTexture}
			/>

			<group>
				<Suspense fallback={<Loader />}>
					<Float floatIntensity={1} speed={2} position={[0, 1, 0]}>
						<Center position={[1, 1, 0]} rotation={[1, 0, 0]}>
							<Stage shadows>
								<mesh
									position={[-1, 1.15, 2.25]}
									rotation={[-0.6, 0, 0]}
									scale={[1, 0.93, 0]}
								>
									<planeGeometry args={[2, 3]} />
									<meshBasicMaterial
										map={luckyLukeTexture}
										side={DoubleSide}
									/>
								</mesh>
								<LuckyLuke
									scale={1}
									position={[-2, 0, 3]}
									rotation-x
								/>
							</Stage>
							<Model />
						</Center>
					</Float>
					<Float floatIntensity={2} speed={1} position={[0, 0, -5]}>
						<Clouds material={THREE.MeshStandardMaterial}>
							<Cloud
								seed={29}
								segments={50}
								bounds={[25, 25, 25]}
								volume={5}
								color='white'
								opacity={0.2}
								position={[0, 3, 2]}
								scale={[1.5, 1, 1]}
							/>
						</Clouds>
					</Float>
				</Suspense>
			</group>
		</>
	);
}
