import { ButtonGroup, Button} from 'react-bootstrap';


export default class Menu extends React.Component {

    render (){
        return (
            <ButtonGroup id="menu" justified>
                <Button  bsSize="large" href="#">Brincadeiras</Button>
                <Button bsSize="large" href="#">Lingeries</Button>
                <Button bsSize="large" href="#">Acessórios</Button>
                <Button  bsSize="large" href="#">Cosméticos</Button>
            </ButtonGroup>

        )
    }

}
