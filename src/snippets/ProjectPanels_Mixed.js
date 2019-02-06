class ProjectPanels extends React.Component {
	handleClick = (id) => {
		store.dispatch({
			type: 'DISPLAY_PROJECT',
			id: id
		});
	};

	render() {
		conts panels = this.props.panels.map((panel, index) => {
			<div
				key={index}
				className={panel.active ? 'active element': 'element'}
				onClick={() => this.handleClick(panel.id)}
			>
				{panel.title}
			</div>
		});

		return (
			<div className='ui-panelized'>
				{panels}
			</div>
		);
	}
}