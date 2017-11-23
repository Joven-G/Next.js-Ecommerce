import Layout from '../components/MyLayout.js'
import ProdutosCarrinho from '../components/ProdutosCarrinho.js';
import InformacoesCliente from '../components/InformacoesCliente.js';
import { Form, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Label } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


export default class Carrinho extends React.Component {
    state = {
        // logged: this.props.store.user || false;
        logged: false,
    }

    frete(){
        alert("BBBB");
    }

    render (){
        if(this.state.logged == false){
            console.log("Nao tem carrinho, mandar para a pagina de login");
        }

        return (
          <div>
            <Layout>
              <div>
                <h1>Informações Cliente</h1>
                <InformacoesCliente />
              </div>
              <div>
                <h1>Produtos no Carrinho</h1>
                <ProdutosCarrinho />
              </div>
                
              <Panel header="Endereço de Entrega">
              <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel}  sm={1}>
                      CPF
                    </Col>
                    <Col sm={5}>
                      <FormControl 
                        type="cpf" 
                        placeholder="this.prop.store.user.cpf" />
                    </Col>
                </FormGroup>

                <FormGroup>
                  <Col componentClass={ControlLabel}  sm={1}>
                    Endereço
                  </Col>
                  <Col sm={5}>
                    <FormControl 
                      type="endereco" 
                      placeholder="this.prop.store.user.endereco" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col componentClass={Button} smOffset={1} onClick={this.frete}>
                    Re-Calcular Frete
                  </Col>
                </FormGroup>
                <Col>
                  <ListGroup>
                    <ListGroupItem header="Preço Final">R$ this.prop.state.preco</ListGroupItem>
                  </ListGroup>
                </Col>
            
                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit" bsSize="large">
                      Finalizar Compra
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
              </Panel>
	    </Layout>
          </div>
        );
    }
};
