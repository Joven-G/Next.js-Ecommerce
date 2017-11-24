import React from 'react';
import { Grid, Thumbnail, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

export default class GridProduto extends React.Component {

  render() {
      const rows = this.props.produtos.reduce((prev, item, i) => {
        const where = Math.floor(i / 4);
        const isNew = i === 0 || i % 4 === 0;
        if (isNew) {
          prev.push([item]);
        } else {
          prev[where].push(item);
        }
        return prev;
      }, []);



      return (
        <div>
        <style type="text/css">{`
          .img-thumb {
              width:310px;
              height:310px;
          }
          .thumb-produto {
              width:350px;
              height:500px
          }
        `}</style>
        <Grid bsClass='GridProduto'>
          {
            rows.map((row) => <Row className="show-grid">
              {
                row.map((produto) => <Col sm={6} md={4}>
                    <Thumbnail bsClass="thumbnail thumb-produto">
                      <img 
                        class="img-thumb" 
                        src={produto.img[0]} 
                        alt={produto.name}/ >

                      <h3>{produto.name}</h3>
                      <p>{produto.description}</p>
                      <p>
                        <Button bsStyle="primary">Adicionar ao carrinho</Button>&nbsp;
                        <Button bsStyle="default">Detalhes</Button>
                      </p>
                    </Thumbnail>
                </Col>)
              }
            </Row>)
          }
        </Grid>
        </div>
      );
  }
}
