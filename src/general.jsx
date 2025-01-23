import './stylesheets/general.css';
function General(props) {
	const data = [
		{
			final: props.final,
			time: props.time,
			last: props.Last,
		},
	];

	return (
		<div className="generalcontainer">
			<div className="KPI1">
				<div className="headingGEN">Final Price:</div>
				{props.final}
			</div>
			<div className="KPI2">
				<div className="headingGEN">Interval:</div>
				{props.time}
			</div>
			<div className="KPI3">
				<div className="headingGEN">Last Refresh:</div>
				{props.Last}
			</div>
			<div className="KPI4">
				<div className="headingGEN">Random:</div>rand
			</div>
		</div>
	);
}
export default General;
