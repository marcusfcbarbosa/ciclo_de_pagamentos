import React ,{ Component } from 'react'
//conectando o redux para o gerenciamento de estado
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectTab } from './tabActions'

import If from '../operator/if'

class TabHeader extends Component{
        render(){
                const selected = this.props.tab.selected === this.props.target
                const visible = this.props.tab.visible[this.props.target]
                return(
                        <If test={visible}>
                                <li className={selected ? 'active': ''}>
                                        <a href="javascript:;"
                                                data-toggle='tab' 
                                                onClick={()=> this.props.selectTab(this.props.target)}
                                                data-target={this.props.target} >
                                                <i className={`fa fa-${this.props.icon}`}></i>{this.props.label}
                                        </a>
                                </li>
                        </If>
                )
        }
}


//tab eu peguei do reducer.js
const mapStateToProps = state =>({ tab: state.tab })
const mapDispatchToPros = dispatch =>bindActionCreators({selectTab},dispatch)
//decorator (Conectado o componente TabHeader com o estado do Redux)
export default connect( mapStateToProps,mapDispatchToPros)(TabHeader) 