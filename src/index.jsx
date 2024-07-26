import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import {
	Bloom,
	DepthOfField,
	EffectComposer,
	Noise,
	Vignette,
} from '@react-three/postprocessing';

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
	<Canvas
		shadows
		camera={{
			fov: 45,
			near: 0.1,
			far: 200,
			position: [-0.3, -0.02, 1],
		}}
	>
		<Experience />
		<EffectComposer>
			<DepthOfField
				focusDistance={0}
				focalLength={0.1}
				bokehScale={2}
				height={480}
			/>
			<Bloom
				luminanceThreshold={0.4}
				luminanceSmoothing={0.9}
				height={300}
			/>
			<Noise opacity={0.02} />
			<Vignette eskil={false} offset={0.1} darkness={1.1} />
		</EffectComposer>
	</Canvas>
);