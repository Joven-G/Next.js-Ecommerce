import Header from './Header'
import Bootstrap from './Bootstrap';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Bootstrap />
    <Header />
    {props.children}
  </div>
)

export default Layout
