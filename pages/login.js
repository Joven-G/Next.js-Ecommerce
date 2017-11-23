import React from 'react';
import Layout from '../components/MyLayout.js'
import GridProduto from '../components/MyGrid.js'
import GridLayout from '../components/MyGrid.js'
import Link from 'next/link'
import { FieldGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'

export default class Login extends React.Component {

    render() {
      return (
        <div>
          <style type="text/css">{`
            .formLogin {
              width: 30%;
            }
          `}</style>
          <Layout>
            <h1>Login</h1>
             <form class="formLogin">
               <FormGroup>
                 <ControlLabel>
                   Usuario
                 </ControlLabel>
                 <FormControl type="text" placeholder="Usuario" />
               </FormGroup>
               <FormGroup>
                 <ControlLabel>
                   Senha
                 </ControlLabel>
                 <FormControl type="password" />
               </FormGroup>
               <Button type="submit">
                Entrar
               </Button>
             </form>
          </Layout>
        </div>
      );
    }
}
