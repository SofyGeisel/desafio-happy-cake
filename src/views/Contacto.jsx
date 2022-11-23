import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contacto() {
  return (
    <Form className='formulario'>
        <h2>Cuéntanos, ¿En qué te podemos ayudar?</h2>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button variant="danger" className='boton'>Enviar</Button>
      </Form.Group>
     
    </Form>
  );
}

export default Contacto;