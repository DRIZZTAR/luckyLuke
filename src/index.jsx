import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Vignette,
} from '@react-three/postprocessing';
import Loader from './Loader.jsx';
import { Suspense } from 'react';
import Overlay from './Overlay.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
	<>
		<Canvas
			shadows
			camera={{
				fov: 80,
				near: 0.1,
				far: 130,
				position: [-0.5, -0.2, 2],
			}}
			dpr={[1, 2]} // Adjust pixel ratio for better performance on mobile
		>
			<Suspense fallback={<Loader />}>
				<Experience />
			</Suspense>
			<EffectComposer>
				<DepthOfField
					focusDistance={0}
					focalLength={0.2}
					bokehScale={2}
					height={480}
				/>
				<Bloom
					luminanceThreshold={2}
					luminanceSmoothing={0.2}
					height={100}
				/>
				<Vignette eskil={false} offset={0.1} darkness={1.1} />
			</EffectComposer>
		</Canvas>
		<Overlay />
	</>
);