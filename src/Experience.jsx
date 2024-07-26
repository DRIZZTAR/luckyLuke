import {
	Environment,
	OrbitControls,
	Float,
	Stage,
	Clouds,
	Cloud,
} from '@react-three/drei';
import * as THREE from 'three';
import { Perf } from 'r3f-perf';
import { Suspense } from 'react';
import { TextureLoader, DoubleSide } from 'three';
import { useLoader } from '@react-three/fiber';
import Placeholder from './Placeholder.jsx';
import LuckyLuke from './LuckyLuke.jsx';
import Model from './Model.jsx';
import Loader from './Loader.jsx'; // Create this component

export default function Experience() {
	const luckyLukeTexture = useLoader(TextureLoader, '/LuckyLuke.jpg');

	return (
		<>
			{/* <Perf position='top-left' /> */}

			<OrbitControls makeDefault/>

			<directionalLight
				castShadow
				position={[2, 10, 2]}
				intensity={4.5}
				shadow-normalBias={0.1}
			/>

			<ambientLight intensity={0.4} />

			<Environment background map={luckyLukeTexture} />

			<Stage shadows={false}>
				<Suspense fallback={<Loader />}>
					<Float floatIntensity={1} speed={2} position={[2, 1, 2]}>
						{/*Image*/}
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
						{/*Models*/}
						<Model />
						<LuckyLuke scale={1} position={[-2, 0, 3]} rotation-x />
						{/* Effects */}
					</Float>
					<Float
						floatIntensity={0.2}
						speed={0.5}
						position={[0, 0, -5]}
					>
						<Clouds material={THREE.MeshBasicMaterial}>
							<Cloud
								seed={102}
								segments={50}
								bounds={[25, 25, 25]}
								volume={10}
								color='red'
								opacity={0.6}
								position={[0, 3, 2]}
								scale={[1.5, 1, 1]}
							/>
						</Clouds>
					</Float>
				</Suspense>
			</Stage>
		</>
	);
}
