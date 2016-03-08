import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import People from './people';
import ImmutablePeople from './immutablePeople';
	
class App extends React.Component {
		
  	render() {
  		return (
			<Grid>
				<Row>
					<Col xs={12}>
						<h1>Immutable & React Example</h1>
						<p>Open the developer console (along with the code) to check what is happening behind the scenes, currently being logged out is the which components is being rendered and the time it took to render.<br/><small>Note: The console.log of which components are being rendered greatly amplifies the difference in performance.</small></p>
					</Col>

					<Col xs={6}>
						<p>This side is a list <strong>without</strong> immutability.<br/><small>Note: All of the components are always being rendered.</small></p>
						<People />
					</Col>
					<Col xs={6}>
						<p>This side is a list <strong>with</strong> immutability.<br/><small>Note: Only the new components is being rendered.</small></p>
						<ImmutablePeople />
					</Col>
				</Row>
		   	</Grid>
		);
  	}
}
  
export default App;

ReactDOM.render(<App />, document.getElementById('app'));