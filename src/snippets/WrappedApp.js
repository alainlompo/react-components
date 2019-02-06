import { Provider } from 'react-redux';

const App = () => (
	<div className='ui app'>
		<ProjectPanels />
		<ProjectDisplay />
	</div>
);

const WrappedApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

export default WrappedApp;

