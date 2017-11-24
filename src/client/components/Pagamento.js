import React from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import { Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap'
import { Loader } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import { browserHistory } from 'react-router';


const Cartao = ({ onClick }) => (
  <Form horizontal>
    <FormGroup controlId="formNumeroCartao">
      <Col componentClass={ControlLabel} sm={2}>
         Numero Cartão
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalCodigoSegurancaCartao">
      <Col componentClass={ControlLabel} sm={2}>
        Codigo Cartao
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit" bsSize="large" onClick={onClick}>
          Comprar com Cartão
        </Button>
      </Col>
    </FormGroup>
  </Form>
)

const Boleto = ({ onClick }) => (
  <Form horizontal>
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit" bsSize="large" onClick={onClick}>
          Comprar com Boleto
        </Button>
      </Col>
    </FormGroup>
  </Form>
)

@inject('store', 'api') @observer
class Pagamento extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        bomPagador: true,
        loading: false
      }
    }

    pagar = () => {
      const { store } = this.props;

      this.setState({ loading: true });
      const promises = Object.values(this.props.store.carrinho.produtos).map((produto) =>
        this.props.api.put('http://ec2-54-207-63-160.sa-east-1.compute.amazonaws.com:3000', `products/${produto._id}/increase/stock/${-produto.quantidade}`, {})
      .then((data) => { console.log(data); }));

      promises.push(this.props.api.post('http://site-env.mxvnckfmbb.us-east-2.elasticbeanstalk.com', 'api/envio', {
        destinatario: store.frete.destinatario || 'John',
        id_site: store.frete.id_site,
        destino_cep: store.frete.destino_cep,
        destino_numero: store.frete.destino_numero,
        destino_estado: store.frete.destino_estado,
        destino_cidade: store.frete.destino_cidade,
        destino_endereco: store.frete.destino_endereco,
        volume: store.frete.volume
      })
        .then((data) => { this.props.store.finalizado = data; }));

      Promise.all(promises).then(() => {
        this.props.store.frete = {};
        this.props.store.carrinho.produtos = {};
        browserHistory.push('/finalizado');
      });
    }

//     componentDidMount() {
//       const { api } = this.props;
//
//         console.log("AAAAAAA");
//
//         // "https://mc437.viniciusfabri.com/sc/api/score/mc437_key_2017/34821505754"
//         const URL = "https://mc437.viniciusfabri.com";
//         const api_key = "mc437_key_2017";
//         var cpf = 34821505754;
//         const endpoint = "sc/api/score/"+api_key+"/"+cpf;
//         const param =  { api_key: api_key,
//                         cpf: cpf };
//         const headers = {
//           'Content-Type': 'application/json',
//            'Access-Control-Allow-Origin': '*',
//            "cache-control": "no-cache"
//         };
//
// // mau = 0
//         api.get(URL, endpoint, param, headers)
//             .then((data) => {
//                 console.log("GRUPO7: ");
//                 console.log(data);
//             });
//     }


    render(){
	var boleto;

        if(this.state.bomPagador){
            boleto = (<Tab eventKey={2} title="Boleto">
                        <p />
	                <Boleto onClick={() => this.pagar()} />
	              </Tab>);
        }

        if (this.state.loading) {
          return (<div>
            <p>Aguarde um momento, estamos processando o seu pedido!</p>
            <Loader active />
          </div>);
        }

	return (
	  <Tabs animation={false} id="tabs-pagamento">
	    <Tab eventKey={1} title="Cartão">
              <p />
	      <Cartao onClick={() => this.pagar()} />
	    </Tab>
            {boleto}
	  </Tabs>
	)
    }
}

export default Pagamento
