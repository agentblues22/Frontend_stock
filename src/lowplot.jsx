import ResponsivePlot from 'react-plotly.js';
import './stylesheets/lineplot.css';
function Moav(props) {
	const data = [
		{
			x: props.index,
			y: props.moav,
			type: 'scatter',
		},
	];

	const layout = {
		title: 'Moving Averages over a period of 5',
		xaxis: { title: 'Values' },
		yaxis: { title: 'Frequency' },
	};

	const config = {
		responsive: true,
	};
	return (
		<div className="lineplot">
			<ResponsivePlot
				data={data}
				layout={layout}
				config={config}
				useResizeHandler={true}
				style={{ width: '100%', height: '100%' }}
			/>
		</div>
	);
}
export default Moav;
