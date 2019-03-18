import React ,{Component} from 'react'

//conectando o redux para o gerenciamento de estado
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList } from './billingCycleActions'

class BillingCycleList extends Component{
        componentWillMount(){
            this.props.getList()
    }

    render(){
        //por estar trabalhando com requisições assincronas, eu só irei conseguir visualizar o resultado do request feito na action, dentro do render, pois dessa forma ele
        //somente irá renderizar quando tiver uma resposta da promisse
        console.log(this.props.list)
        return(
            <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Mês</th>
                                <th>Ano</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
            </div>
        )
    }
}

//aplicando o redux
const mapStateToProps = state =>({
    list:state.billingCycle.list
})
const mapDispatchToPros = dispatch =>bindActionCreators({getList}, dispatch)
//decorator
export default connect(mapStateToProps,mapDispatchToPros)(BillingCycleList)