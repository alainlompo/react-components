const Panels = (props) => (
	<div className='ui-panelized'>
		{
			props.panels.map((panel, index) => (
			<div
				key={index}
				className={panel.active ? 'active element': 'element'}
				onClick={() => this.handleClick(panel.id)}
			>
				{panel.title}
			</div>
			)
		}
	</div>
);

class ProjectPanels extends React.Component {
	componentDidMount() {
		store.subscribe(() => this.forceUpdate());
	}

	render() {
		const state = store.getState();

		const panels = state.projects.map(p => ({
			title: p.title,
			active: p.active === true,
			id: p.id
		}));
	}

	return (
		<Panels
			panels={panels}
			onClick={(id) => (
				store.dispatch({
					type: 'OPEN_PROJECT',
					id: id
				})
			)}
		/>
	);
}