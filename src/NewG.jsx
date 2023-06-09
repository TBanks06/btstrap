import Card from 'react-bootstrap/Card';

function NewG() {
  return (
    
    <Card className='border-0' style={{ width: '24rem' } }>
      <Card.Body className='bg-info rounded-4 '>
        
        <Card.Title className='mb-5 display-5 fw-normal font-monospace'>New goals  require new knowledge</Card.Title>
            <Card.Text className='mb-4 fs-6 text-sm-start fw-light lh-1' style={{width: '13rem'}} >

                We have created an e-learning platform that allows teams to find, share, 
                and use the knowledge, they need to achieve their goals.
            </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewG;