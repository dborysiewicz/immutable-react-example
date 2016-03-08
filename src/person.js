import React from 'react';

class Person extends React.Component {	
  	render() {
		console.log(this.props.person)
  		return (
			<div>
				{this.props.person.name} - {this.props.person.age}
			</div>
		);
  	}
}
  
export default Person;