var time;

import React from 'react';
import { ButtonInput } from 'react-bootstrap';
import Person from './person';
import Names from './names';

class People extends React.Component {
	constructor() {
		super();

		var list = [];

		for (var i = 1; i <= 10; i++) {
			list.push({
				name: Names[Math.floor(Math.random() * Names.length)],
				age: Math.floor(Math.random()*(90-21)+20)
			});
		};

		this.state = {
			people: list
		};

		this.addPerson = this.addPerson.bind(this);
		this.changeDetails = this.changeDetails.bind(this);
	}

	addPerson(e) {
		this.state.people.push({
			name: Names[Math.floor(Math.random() * Names.length)],
			age: Math.floor(Math.random()*(90-21)+20)
		});

		this.setState(this.state);
	}

	changeDetails(e) {
		this.state.people[Math.floor(Math.random()*this.state.people.length)] = {
			name: Names[Math.floor(Math.random() * Names.length)],
			age: Math.floor(Math.random()*(90-21)+20)
		};

		this.setState(this.state);
	}

	shouldComponentUpdate(){
		time = Date.now();
		return true
	}

	componentDidUpdate(){
		console.log(Date.now()-time+'ms');
	}
		
  	render() {
  		return (
			<div>
				<ButtonInput onClick={this.addPerson} value="Add Person" bsStyle="primary"/>
				<ButtonInput onClick={this.changeDetails} value="Change Details Of Random Person" bsStyle="primary"/>
				
				{this.state.people.map(function(person, key){ 
					return (
						<Person key={key} person={person} />
					)
				})}
		   </div>
		);
  	}
}
  
export default People;