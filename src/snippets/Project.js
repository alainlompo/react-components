const Project = (props) => {
	<div className='ui project center aligned'>
		<EventList
			events={props.project.events}
			onClick={props.onEventClick}
		/>
		<TextFieldSubmit
			onSubmit={props.onEventSubmit}
		/>
	</div>
}