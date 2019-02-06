import { Provider, connect } from 'react-redux';

const App = () => (
	<div className='ui app'>
		<ProjectPanels />
		<ProjectDisplay />
	</div>
);

const mapStateToPanelsProps = (state) => {

	const panels = state.projects.map( p => (
		{
			title: p.title;
			active: p.id === state.activeProjectId,
			id: p.id
		}
	));

	return {
		panels
	};
};

const mapDispatchToPanelsProps = (dispatch) => (
	{
		onClick: (id) => (
			dispatch({
				type: 'OPEN_PROJECT',
				id: id
			})
		) 
	}
);

const mapStateToProjectProps = (state) => (
	{
		project: state.projects.find(
			p => p.id === state.activeProjectId
		)
	}
);

const mapDispatchToProjectProps = (dispatch) => (
	{
		onEventClick: (id) => (
			dispatch({
				type: 'DELETE_EVENT',
				id: id
			})
		),
		dispatch: dispatch
	}
);

const mergeProjectProps = (stateProps, dispatchProps) => (
	{
		...stateProps,
		...dispatchProps,
		onEventSubmit: (text) => (
			dispatchProps.dispatch({
				type: 'ADD_EVENT',
				text: text,
				projectId: stateProps.project.id
			})
		)	
	}
);

const ProjectPanels = connect(
	mapStateToPanelsProps,
	mapDispatchToPanelsProps
)(Panels);

const ProjectDisplay = connect(
	mapStateToProjectProps,
	mapDispatchToProjectProps,
	mergeProjectProps
)(Project);

const WrappedApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

export default WrappedApp;