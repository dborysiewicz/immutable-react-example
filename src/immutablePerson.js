import React from 'react/addons';

class ImmutablePerson extends React.Component {
	constructor() {
		super();
	}

	shouldComponentUpdate () {
		return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
	}
		
  	render() {
		console.log(this.props.person)
  		return (
			<div>
				{this.props.person.name} - {this.props.person.age}
			</div>
		);
  	}
}
  
export default ImmutablePerson;