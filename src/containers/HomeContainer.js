import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart} from '../services/actions/actions'

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToAction = (dispatch) =>{
    return {
        addToCart: data=>dispatch(addToCart(data))
    }
}
export default connect(mapStateToProps, mapDispatchToAction)(Home);