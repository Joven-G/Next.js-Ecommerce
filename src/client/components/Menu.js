import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';


export default class Menu extends React.Component {

  render() {
    return (
      <Button.Group id="menu" size="huge">
        <Button as={Link} to="/produtos/eletronicos">Eletrônicos</Button>
        <Button as={Link} to="/produtos/moda">Moda</Button>
        <Button as={Link} to="/produtos/moveis">Móveis</Button>
        <Button as={Link} to="/produtos/materialescolar">Material Escolar</Button>
      </Button.Group>
    );
  }

}
