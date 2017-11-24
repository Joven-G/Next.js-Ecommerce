import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';


export default class Menu extends React.Component {

  render() {
    return (
      <Button.Group id="menu" size="huge">
        <Button as={Link} to="/produtos/eletronicos">Eletrônicos</Button>
        <Button href="#">Lingeries</Button>
        <Button href="#">Acessórios</Button>
        <Button href="#">Cosméticos</Button>
      </Button.Group>
    );
  }

}
