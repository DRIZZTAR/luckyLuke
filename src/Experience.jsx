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

			<OrbitControls
				makeDefault
				minDistance={5}
				maxDistance={7}
				enableZoom={true}
				enablePan={false}
				dampingFactor={0.01}
			/>

			<directionalLight
				castShadow
				position={[2, 10, 2]}
				intensity={3.5}
				shadow-normalBias={1.1}
			/>

			<Environment background map={luckyLukeTexture}/>

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
						<LuckyLuke scale={1} position={[-2, 0, 3]} rotation-x />
						<Model />
						{/* Effects */}
					</Float>
					<Float
						floatIntensity={Math.random() * 20}
						speed={Math.random() * 5}
						position={[0, 0, -5]}
					>
						<Clouds material={THREE.MeshBasicMaterial}>
							<Cloud
								seed={12}
								segments={100}
								bounds={[25, 25, 25]}
								volume={5}
								color='pink'
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
