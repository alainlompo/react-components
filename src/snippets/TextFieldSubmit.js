class TextFieldSubmit extends React.Component {
	state = {
		value: ''
	};

	onChange = (e) => {
		this.setState({
			value: e.target.value
		})
	};

	handleSubmit = () => {
		this.props.onSubmit(this.state.value);
		this.setState({
			value: ''
		});
	};
}