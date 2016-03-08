var time;

import React from 'react';
import { ButtonInput } from 'react-bootstrap';
import Immutable from 'immutable';
import ImmutablePerson from './immutablePerson';
import Names from './names';

class ImmutablePeople extends React.Component {
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
			immutablePeople: Immutable.List(list)
		};

		this.addPerson = this.addPerson.bind(this);
		this.changeDetails = this.changeDetails.bind(this);
	}

	addPerson(e) {
		this.state.immutablePeople = this.state.immutablePeople.push({
			name: Names[Math.floor(Math.random() * Names.length)],
			age: Math.floor(Math.random()*(90-21)+20)
		});
		
		this.setState(this.state);
	}

	changeDetails(e) {
		this.state.immutablePeople = this.state.immutablePeople.set(Math.floor(Math.random()*this.state.immutablePeople.size), {
					name: Names[Math.floor(Math.random() * Names.length)],
					age: Math.floor(Math.random()*(90-21)+20)
				});

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
				<ButtonInput onClick={this.addPerson} value="Add Immutable Person" bsStyle="primary"/>
				<ButtonInput onClick={this.changeDetails} value="Change Details Of Random Immutable Person" bsStyle="primary"/>

				{this.state.immutablePeople.map(function(person, key){ 
					return (
						<ImmutablePerson key={key} person={person} />
					)
				})}
		   </div>
		);
  	}
}
  
export default ImmutablePeople;
