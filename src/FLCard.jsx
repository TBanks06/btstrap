
// import Stack from 'react-bootstrap/Stack';
import { BsFillArrowDownRightSquareFill } from "react-icons/bs";
// import Image from 'react-bootstrap'
import {Card} from 'react-bootstrap'

function FLCard() {
  return (
    <Card className='border-0 d-flex flex-row gap-2 justify-content-between align-items-center ' style={{ width: '24rem' } } >
      <img src='https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300' className=' rounded-5' alt="Description" width='270' height='150' />
      <BsFillArrowDownRightSquareFill className=' text-warning' style={{fontSize: '170'}} />
    </Card>
  );
}

export default FLCard;