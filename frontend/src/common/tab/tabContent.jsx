import React ,{ Component } from 'react'
//conectando o redux para o gerenciamento de estado
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class TabContent extends Component{
 render(){
    //se a tab selecionada for igual a esse id, esse é o conteúdo que tem que ser renderizado 
    const selected = this.props.tab.selected === this.props.id
     //this.props.id é o target do cabeçalho
     return(
         <div id={this.props.id} 
                className={`tab-pane ${ selected ? 'active': ''}`}>
                { this.props.children }
         </div>
     )
 }   
}

const mapStateToProps = state =>({ tab: state.tab })

//decorator (Conectado o componente TabHeader com o estado do Redux)
export default connect(mapStateToProps)(TabContent)