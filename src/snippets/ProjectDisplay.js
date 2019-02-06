class ProjectDisplay extends React.Component {
	componentDidMount() {
		store.subscribe(() => this.forceUpdate());
	}

	render() {
		const state = store.getState();
		const activeProjectId = state.activeProjectId;
		const activeProject = state.projects.find( p => p.id === activeProjectId);
	

		return (
			<Project 
				project={activeProject}
				onEventClick={(id) => (
					store.dispatch({
						type: 'DELETE_EVENT',
						id: id
					})
				)}
				onEventSubmit={(text) => (
					store.dispatch({
						type: 'ADD_EVENT',
						text: text,
						projectId: activeProjectId
					})
				)}
			/>
		);
	}
}

