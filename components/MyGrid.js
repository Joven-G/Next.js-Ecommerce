import React from 'react';
import { Grid, Thumbnail, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

export default class GridProduto extends React.Component {

  getProdutos() {
      return [
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          'Donec hendrerit tempor tellus.',
          'Donec pretium posuere tellus.'
      ];
  }

  render() {
      var produtos = this.getProdutos();
      var colunasM = 4;
      var colunasS = 0;

      return (
        <div>
        <Grid bsClass='GridProduto' >
          <Row className="show-grid">
            <Col sm={colunasS} md={colunasM}>
                <Thumbnail src="/assets/dados.jpg" alt="242x200">
                  <h3>dados</h3>
                  <p>{produtos[0]}</p>
                  <p>
                    <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                    <Button bsStyle="default">Detalhes</Button>
                  </p>
                </Thumbnail>
            </Col>

            <Col sm={colunasS} md={colunasM}>
                <Thumbnail src="/assets/dados.jpg" alt="242x200">
                  <h3>dados</h3>
                  <p>{produtos[0]}</p>
                  <p>
                    <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                    <Button bsStyle="default">Detalhes</Button>
                  </p>
                </Thumbnail>
            </Col>

            <Col sm={colunasS} md={colunasM}>
                <Thumbnail src="/assets/dados.jpg" alt="242x200">
                  <h3>dados</h3>
                  <p>{produtos[0]}</p>
                  <p>
                    <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                    <Button bsStyle="default">Detalhes</Button>
                  </p>
                </Thumbnail>
            </Col>

          </Row>
          <Row className="show-grid">

          <Col sm={colunasS} md={colunasM}>
              <Thumbnail src="/assets/dados.jpg" alt="242x200">
                <h3>dados</h3>
                <p>{produtos[0]}</p>
                <p>
                  <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                  <Button bsStyle="default">Detalhes</Button>
                </p>
              </Thumbnail>
          </Col>
          <Col sm={colunasS} md={colunasM}>
              <Thumbnail src="/assets/dados.jpg" alt="242x200">
                <h3>dados</h3>
                <p>{produtos[0]}</p>
                <p>
                  <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                  <Button bsStyle="default">Detalhes</Button>
                </p>
              </Thumbnail>
          </Col>
          <Col sm={colunasS} md={colunasM}>
              <Thumbnail src="/assets/dados.jpg" alt="242x200">
                <h3>dados</h3>
                <p>{produtos[0]}</p>
                <p>
                  <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                  <Button bsStyle="default">Detalhes</Button>
                </p>
              </Thumbnail>
          </Col>
          </Row>

          <Row className="show-grid">
          <Col sm={colunasS} md={colunasM}>
              <Thumbnail src="/assets/dados.jpg" alt="242x200">
                <h3>dados</h3>
                <p>{produtos[0]}</p>
                <p>
                  <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                  <Button bsStyle="default">Detalhes</Button>
                </p>
              </Thumbnail>
          </Col>
          <Col sm={colunasS} md={colunasM}>
              <Thumbnail src="/assets/dados.jpg" alt="242x200">
                <h3>dados</h3>
                <p>{produtos[0]}</p>
                <p>
                  <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                  <Button bsStyle="default">Detalhes</Button>
                </p>
              </Thumbnail>
          </Col>
          <Col sm={colunasS} md={colunasM}>
              <Thumbnail src="/assets/dados.jpg" alt="242x200">
                <h3>dados</h3>
                <p>{produtos[0]}</p>
                <p>
                  <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                  <Button bsStyle="default">Detalhes</Button>
                </p>
              </Thumbnail>
          </Col>
          </Row>
          <Row className="show-grid">
          <Col sm={colunasS} md={colunasM}>
              <Thumbnail src="/assets/dados.jpg" alt="242x200">
                <h3>dados</h3>
                <p>{produtos[0]}</p>
                <p>
                  <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                  <Button bsStyle="default">Detalhes</Button>
                </p>
              </Thumbnail>
          </Col>
          <Col sm={colunasS} md={colunasM}>
              <Thumbnail src="/assets/dados.jpg" alt="242x200">
                <h3>dados</h3>
                <p>{produtos[0]}</p>
                <p>
                  <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                  <Button bsStyle="default">Detalhes</Button>
                </p>
              </Thumbnail>
          </Col>
          <Col sm={colunasS} md={colunasM}>
              <Thumbnail src="/assets/dados.jpg" alt="242x200">
                <h3>dados</h3>
                <p>{produtos[0]}</p>
                <p>
                  <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                  <Button bsStyle="default">Detalhes</Button>
                </p>
              </Thumbnail>
          </Col>
          </Row>
        </Grid>
        </div>
      );
  }
}
