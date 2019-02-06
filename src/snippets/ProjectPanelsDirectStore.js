class ProjectPanels extends React.Component {
	componentDidMount() {
		store.subscribe(() => this.forceUpdate());
	}
}