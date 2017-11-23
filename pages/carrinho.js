import createReactClass from 'create-react-class';
import Layout from '../components/MyLayout.js'
import { Grid, Row, Col } from 'react-bootstrap';
import { Form, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Label } from 'react-bootstrap';

const Cliente = createReactClass({
    getInitialState() {
        return {
            usuario: "Usuario",
            nome: "Nome",
            endereco: "Endereco"
        };
    },

    render (){
        return (
          <Col md={10}>
            <h1>Informações Cliente</h1>
            <Table bordered striped responsive>
              {/* Aqui estão as Informações do Cliente
                  Cada linha tem na primeira coluna um th, para deixar o label em negrito
                  a segunda coluna é o valor que esta no cadastro do usuario*/}
              <tbody>
                <tr>
                  <th>
                    Cliente:
                  </th>
                  <td>
                    {this.state.usuario}
                  </td>
                </tr>
                <tr>
                  <th>
                    Nome:
                  </th>
                  <td>
                    {this.state.nome}
                  </td>
                </tr>
                <tr>
                  <th>
                    Endereço:
                  </th>
                  <td>
                    {this.state.endereco}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        )
    }
});

const Produtos = createReactClass({
    getInitialState() {
        return {
            nome: "Produto",
            quantidade: 3,
            preco: 10
        };
    },

    removerCarrinho(){
        alert("AAAA");
        console.log("Remover Carrinho");
    },
    

    render (){
        return (
          <Col md={10}>
            <h1>Produtos no Carrinho</h1>
              <Table bordered striped responsive>
              <thead>
                <tr>
                  <th>
                    Produto
                  </th>
                  <th>
                    Quantidade
                  </th>
                  <th>
                    Preço
                  </th>
                  <th>
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* 1 produto por linha*/}
                <tr>
                  <th>
                    {this.state.nome}
                  </th>
                  <td>
                    {this.state.quantidade}
                  </td>
                  <td>
                    {this.state.preco}
                  </td>
                  <td>
                    <Button bsSize="xsmall" onClick={this.removerCarrinho}>
                      Remover do Carrinho
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        )
    }
});


const Carrinho = createReactClass ({
    getInitialState() {
        return {
            // logged: this.props.store.user || false;
            logged: false,
        };
    },

    frete(){
        alert("BBBB");
    },

    render (){


        if(this.state.logged == false){
            console.log("Nao tem carrinho, mandar para a pagina de login");
        }

        return (
          <div>
            <Layout>
              <Grid>
                <Row className="show-grid">
                  <Cliente />
                  <Produtos />
                </Row>
              </Grid>
                
              <Form horizontal>
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={2}>
                    CPF
                  </Col>
                  <Col sm={8}>
                    <FormControl type="cpf" placeholder="this.prop.store.user.cpf" />
                  </Col>
                </FormGroup>
           
                <FormGroup>
                  <Col componentClass={ControlLabel} sm={2}>
                    Endereço
                  </Col>
                  <Col sm={8}>
                    <FormControl type="endereco" placeholder="this.prop.store.user.endereco" />
                  </Col>
                </FormGroup>

                <FormGroup>
                <Col componentClass={Button} sm={2}  onClick={this.frete}>
                    Re-Calcular Frete
                  </Col>
                  <Col componentClass={ControlLabel} sm={2}>
                    Preço final
                  </Col>
                  <Col componentClass={ControlLabel} sm={0}>
                    R$ this.prop.state.preco
                  </Col>
                </FormGroup>
            
                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">
                      Finalizar Compra
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
	    </Layout>
          </div>
        );
    }
})

export default Carrinho
