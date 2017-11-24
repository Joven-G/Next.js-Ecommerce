import React from 'react';
import { Grid, Thumbnail, Row, Col } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router';
import { Button } from 'semantic-ui-react';


@inject('store') @observer
export default class GridLayout extends React.Component {

  adicionarCarrinho = (produto) => {
    const { store } = this.props;

    if (store.carrinho.produtos[produto._id]) {
      store.carrinho.produtos[produto._id].quantidade += 1;
    } else {
      const novoProduto = { ...produto };

      novoProduto.quantidade = 1;

      store.carrinho.produtos[produto._id] = novoProduto;
    }

    store.snackbar = { active: true, message: 'Produto adicionado ao carrinho com sucesso', success: true };
  }

  render() {
    const rows = this.props.store.produtos.reduce((prev, item, i) => {
      const where = Math.floor(i / 3);
      const isNew = i === 0 || i % 3 === 0;
      if (isNew) {
        prev.push([item]);
      } else {
        prev[where].push(item);
      }
      return prev;
    }, []);

    return (
      <div>
        <Grid bsClass="GridProduto">
          {
            rows.map(row => <Row className="show-grid">
              {
                row.map(produto => <Col sm={6} md={4}>
                  <Thumbnail bsClass="thumbnail thumb-produto">
                    <img
                      className="img-thumb"
                      src={produto.img[0]}
                      alt={produto.name}
                    />

                    <h3>{produto.name}</h3>
                    <p>{produto.description}</p>
                    <p>
                      <Button primary onClick={() => this.adicionarCarrinho(produto)}>Adicionar ao carrinho</Button>&nbsp;
                      <Button as={Link} to={`/produto/${produto._id}`}>Detalhes</Button>
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
