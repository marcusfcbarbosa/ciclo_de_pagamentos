import React ,{Component} from 'react'
//conectando o redux para o gerenciamento de estado
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList,showUpdate,showDelete } from './billingCycleActions'

class BillingCycleList extends Component{
    componentWillMount(){
            this.props.getList()
    }
    renderRows(){
        const list = this.props.list || []
        //bc = billlingCyle
        return list.map(bc =>(
            <tr id={bc._id} >
                <td> {bc.name}</td>
                <td> {bc.month}</td>
                <td> {bc.year}</td>
                <td> 
               <button  className='btn btn-warning' onClick={()=> this.props.showUpdate(bc) }>
                    <i className='fa fa-pencil'></i>
               </button>
               <button  className='btn btn-danger' onClick={()=> this.props.showDelete(bc) }>
                    <i className='fa fa-trash'></i>
               </button>
                </td>
            </tr>
        ))
    }
    render(){
        //por estar trabalhando com requisições assincronas, eu só irei conseguir visualizar o resultado do request feito na action, dentro do render, pois dessa forma ele
        //somente irá renderizar quando tiver uma resposta da promisse
       return(
            <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Mês</th>
                                <th>Ano</th>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
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
//é esse método que deixa disponivel dentro do props os métodos da Action
const mapDispatchToPros = dispatch =>bindActionCreators({getList,showUpdate,showDelete}, dispatch)
//decorator
export default connect(mapStateToProps,mapDispatchToPros)(BillingCycleList)