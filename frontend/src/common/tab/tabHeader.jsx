import React ,{ Component } from 'react'
//conectando o redux para o gerenciamento de estado
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { SelectTab } from './tabActions'


class TabHeader extends Component{
        render(){
                return(
                    <li>
                        <a href="#"
                                data-toggle='tab' 
                                onClick={()=> this.props.selectTab(this.props.target)}
                                data-target={this.props.target} >
                                <i className={`fa fa-${this.props.icon}`}></i>{this.props.label}
                                </a>
                    </li>
                )
        }
}

//tab eu peguei do reducer.js
const mapStateToProps = state =>({ tab: state.tab })
const mapDispatchToPros = dispatch =>bindActionCreators({SelectTab},dispatch)
//decorator (Conectado o componente TabHeader com o estado do Redux)
export default connect( mapStateToProps,mapDispatchToPros)(TabHeader) 