import { Provider, connect } from 'react-redux';

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

const ProjectPanels = connect(
	mapStateToPanelsProps,
	mapDispatchToPanelsProps
)(Panels);

const WrappedApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

export default WrappedApp;

