import React from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import { Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap'
import { inject, observer } from 'mobx-react';


const Cartao = () => (
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
        <Button type="submit" bsSize="large">
          Comprar com Cartão
        </Button>
      </Col>
    </FormGroup>
  </Form>
)

const Boleto = () => (
  <Form horizontal>
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit" bsSize="large">
          Comprar com Boleto
        </Button>
      </Col>
    </FormGroup>
  </Form>
)


class Pagamento extends React.Component {
    constructor(props) {
      super(props);

      this.state = {bomPagador: true}
    }

    getInitialProps({ api }){

        console.log("AAAAAAA");

        // "https://mc437.viniciusfabri.com/sc/api/score/mc437_key_2017/34821505754"
        const URL = "https://mc437.viniciusfabri.com";
        const api_key = "mc437_key_2017";
        var cpf = 34821505754;
        const endpoint = "sc/api/score/"+api_key+"/"+cpf; 
        const param =  { api_key: api_key,
                        cpf: cpf };


        api.get(URL, endpoint)
            .then((data) => {
                console.log("GRUPO7: ");
                console.log(data);
            });
    }
    // state = {
    //     bomPagador: true


    render(){
	var boleto;

        if(this.state.bomPagador){
            boleto = (<Tab eventKey={2} title="Boleto">
                        <p /> 
	                <Boleto />
	              </Tab>);
        }

	return (
	  <Tabs animation={false} id="tabs-pagamento">
	    <Tab eventKey={1} title="Cartão">
              <p /> 
	      <Cartao />
	    </Tab>
            {boleto}
	  </Tabs>
	)
    }
}

export default Pagamento
