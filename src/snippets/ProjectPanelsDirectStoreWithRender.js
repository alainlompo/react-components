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
}