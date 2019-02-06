const EventList = (props) => (
	<div className= 'ui events'>
		{
			props.events.map(e, index) => (
				<div
					className='event'
					key={index}
					onClick={() => props.onClick(e.id)}
				>
					<div className='text'>
						{e.text}
						<span className='metadata'>@{e.timestamp}</span>
					</div>
				</div>
			)
		}
	</div>
);