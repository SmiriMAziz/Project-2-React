import Card from 'react-bootstrap/Card';
import "bootstrap/dist/js/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample(props) {
  let course = props.prop ; 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course.img} />
      <Card.Body>
        <Card.Title>{course.header}</Card.Title>
        <Card.Text>
          <div>{course.description}</div> 
          <div>{course.rating}</div> 
          <div>{course.students}</div> 
           
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;