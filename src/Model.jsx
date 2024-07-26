import { Clone, useGLTF, Float } from '@react-three/drei';
import { useRef } from 'react';

export default function Model() {
	const model = useGLTF('./LuckyLuke.glb');
	const group = useRef();

	return (
		<group ref={group}>
			<Float floatIntensity={2} rotationIntensity={2} speed={2}>
				<Clone
					object={model.scene}
					scale={0.35}
					position={[
						-4,
						Math.random() * 4 - 2,
						Math.random() * 4 - 2,
					]}
				/>
			</Float>
			<Float floatIntensity={1.5} rotationIntensity={1.5} speed={1.5}>
				<Clone
					object={model.scene}
					scale={0.35}
					position={[Math.random() * 4 - 5, 0, Math.random() * 4 - 2]}
				/>
			</Float>
			<Float floatIntensity={2.5} rotationIntensity={2.5} speed={2.5}>
				<Clone
					object={model.scene}
					scale={0.35}
					position={[4, 0, Math.random() * 4 - 2]}
				/>
			</Float>
			<Float floatIntensity={2.5} rotationIntensity={2.5} speed={2.5}>
				<Clone
					object={model.scene}
					scale={0.35}
					position={[
						Math.random() * 3 - 3,
						5,
						Math.random() * 4 - 2,
					]}
				/>
			</Float>
		</group>
	);
}

useGLTF.preload('./LuckyLuke.glb');
