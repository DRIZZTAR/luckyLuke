import { Html, useProgress } from '@react-three/drei';

export default function Loader() {
	const { progress } = useProgress();
	return (
		<Html className='loader-container'>
			<div className='loader'>
				<div className='progress-bar'>
					<div
						className='progress-bar-fill'
						style={{ width: `${progress}%` }}
					></div>
				</div>
				<p className='inter-bold'>Feeding The Cattle {progress.toFixed(0)}%</p>
			</div>
		</Html>
	);
}
