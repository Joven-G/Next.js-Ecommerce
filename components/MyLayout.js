import Header from './Header'
import Bootstrap from './Bootstrap';
import Menu from './Menu';
import Carrossel from './Carrossel';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}



const Layout = (props) => (
  <div style={layoutStyle}>
    <Bootstrap />
    <Header />

    <Menu />
    <Carrossel />
    {props.children}



  </div>
)

export default Layout
