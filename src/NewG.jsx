import Card from 'react-bootstrap/Card';

function NewG() {
  return (
    
    <Card className='border-0' style={{ width: '24rem' } }>
      <Card.Body className='bg-info rounded-4 '>
        
        <Card.Title className='mb-4 display-5 fw-normal font-monospace'>New goals  require new knowledge</Card.Title>
            <Card.Text className='mb-2 fs-6 text-sm-start ' style={{width: '13.9em'}} >

                We have created an e-learning platform that allows teams to find, share, 
                and use the knowledge, they need to achieve their goals.
            </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewG;