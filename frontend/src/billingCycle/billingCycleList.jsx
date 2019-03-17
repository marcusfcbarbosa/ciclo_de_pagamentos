import React ,{Component} from 'react'

//conectando o redux para o gerenciamento de estado
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class BillingCycleList extends Component{

    render(){
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

export default BillingCycleList