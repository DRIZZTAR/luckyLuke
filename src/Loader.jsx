import { Html, useProgress } from '@react-three/drei';

export default function Loader() {
	const { progress } = useProgress();
	return (
		<Html className='loader-container'>
			<div className='loader'>
				<div className='spinner'></div>
				<p className='loading-text'>Loading {progress.toFixed(0)}%</p>
			</div>
		</Html>
	);
}
