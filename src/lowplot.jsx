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
		autosize: true,
		mode: 'lines+markers',
		plot_bgcolor: 'white',
		paper_bgcolor: 'white',
		xaxis: {
			title: 'Time',
			tickfont: {
				size: 8,
			},
		},
		yaxis: {
			title: 'value',
			tickfont: {
				size: 8,
			},
		},
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
