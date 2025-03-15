import ResponsivePlot from 'react-plotly.js';
import './stylesheets/lineplot.css';
function Line(props) {
	const data = [
		{
			x: props.Index,
			y: props.Records,
			type: 'scatter',
			marker: {
				color: 'red', // Line/marker color
				size: 10,
			},
		},
	];

	const layout = {
		title: 'variation of Value over time',
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
export default Line;
