const Panels = (props) => (
	<div className='ui-panelized'>
		{
			props.panels.map((panel, index) => (
			<div
				key={index}
				className={panel.active ? 'active element': 'element'}
				onClick={() => this.handleClick(panel.id)}
			>
				{panel.title}
			</div>
			)
		}
	</div>
);