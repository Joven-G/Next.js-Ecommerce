import { Button } from 'react-bootstrap';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Layout from '../components/MyLayout.js'
import GridLayout from '../components/MyGrid.js'

import api from '../utils/api';

const Index = (props) => (
  <div>
    <Layout>
      <h1>Produtos em destaque:</h1>
      <style jsx>{`
        h1, a {
          font-family: "Arial";
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: blue;
        }
        a:hover {
          opacity: 0.6;
        }
      `}</style>
      <GridLayout produtos={props.produtos} />
    </Layout>
  </div>
)

Index.getInitialProps = async function() {
  const data = await api.get('http://ec2-54-207-63-160.sa-east-1.compute.amazonaws.com:3000', 'products', { group: 'grupo6' });
  console.log(data);

  return {
    produtos: data
  }

  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  // const data = await res.json()
  //
  // console.log(`Show data fetched. Count: ${data.length}`)
  //
  // return {
  //   shows: data
  // }
}

export default Index
