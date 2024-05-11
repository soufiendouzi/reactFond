import './App.css';

import React  from 'react';
import Card from 'react-bootstrap/Card';
import Name from './Component/Name';
import ImageUrl from './Component/ImageUrl';
import Price from './Component/Price';
import Description from './Component/Description';

function App() {
const firstName = ""
  return (
    <div className="App">
 <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> 
          <Name />
        </Card.Title> 
        <Card.Subtitle className="mb-2 text-muted">
          
          <ImageUrl />

        </Card.Subtitle>
        <Card.Text>
          <Description/>
        </Card.Text>
        <Card.Link href="#">
          <Price /> 
        </Card.Link>
      </Card.Body>
    </Card>
    <p>
      hello , { firstName ? firstName : "there"}
    </p>
    {firstName && <img 
    src ="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/bmw-8-series-805_0.jpg?itok=U0fZqFJv" alt ="j kyu" />}
    </div>
    

  );
}

export default App;
