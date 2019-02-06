class ProjectPanels extends React.Component {
	render() {
		return (
			<Panels 
				panels={this.props.panels}
				onClick={(id) => (
					store.dispatch({
						type: 'OPEN_PROJECT',
						id: id
					})
				)}
			/>
		);
	}
}