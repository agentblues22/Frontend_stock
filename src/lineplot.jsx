import ResponsivePlot from 'react-plotly.js';
import './stylesheets/lineplot.css';
function Line(props) {
	const data = [
		{
			x: props.index,
			y: props.Records,
			type: 'scatter',
		},
	];

	const layout = {
		title: 'variation of Value over time',
		autosize: true,
		mode: 'lines+markers',
		marker: { color: 'red' },
		line: { color: 'red' },
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
