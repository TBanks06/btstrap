import Card from 'react-bootstrap/Card';

function NewG() {
  return (
    <Card style={{ width: '18rem' } }>
      <Card.Body className='bg-skyblue'>
        
        <Card.Title className='mb-3 p-2 w-60'>New goals  require new knowledge</Card.Title>
            <Card.Text className='p-2' >

                We have created an e-learning platform that allows teams to find, share, 
                and use the knowledge, they need to achieve their goals.
            </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewG;