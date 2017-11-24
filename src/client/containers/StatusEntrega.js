import React from 'react';
import { inject, observer } from 'mobx-react';
import { PanelGroup, Panel } from 'react-bootstrap';

import Layout from '../components/Layout';

@inject('store', 'api') @observer
export default class StatusEntrega extends React.Component {

  constructor(props) {
    super(props);
      
    var logged = false;

    if(!logged){
	this.props.history.push('/');
    }
  } 

  render() {
    return (
      <div>
        <Layout>
	  <h1>Entregas</h1>
	  <PanelGroup accordion>
            <Panel header="Entrega id:(1)" eventKey="1">
	      <h3>data saida</h3>
	      <h3>data esperada</h3>
	      <h3>produtos</h3>
	    </Panel>
            <Panel header="Entrega id:(2)" eventKey="2">
	      <h3>data saida</h3>
	      <h3>data esperada</h3>
	      <h3>produtos</h3>
	    </Panel>
          </PanelGroup>
        </Layout>
      </div>
    );
  }
}
