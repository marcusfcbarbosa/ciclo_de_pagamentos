import React ,{Component} from 'react'
import ContentHeader from   '../common/template/contentHeader'
import Content from '../common/template/content'

import Tabs from    '../common/tab/tabs'
import TabsHeader from    '../common/tab/tabsHeader'
import TabsContent from    '../common/tab/tabsContent'
import TabHeader from    '../common/tab/tabHeader'
import TabContent from    '../common/tab/tabContent'
import List from   './billingCycleList'
import Form from    './billingCycleForm'
//conectando o redux para o gerenciamento de estado
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//Actions
import { selectTab,showTabs } from '../common/tab/tabActions'
import { create,update } from './billingCycleActions'


class BillingCycle extends Component{
    componentWillMount(){
        this.props.selectTab('tabList');
        this.props.showTabs('tabList','tabCreate')//limitando a visibilidade, para exibir somente as duas abas de listar e criar
    }
    render(){
        return(
            <div>
                <ContentHeader tittle='Ciclo de Pagamentos' subtittle="Cadastro"/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar'  icon='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                    <List>
                                    </List>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                    <Form onSubmit={ this.props.create } />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update } />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                    <h1>Deletar</h1>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }   
}

//const mapStateToProps = state =>({ tab: state.tab })
const mapDispatchToProps = dispatch =>bindActionCreators({
        selectTab,showTabs,create,update
    },dispatch) 

//decorator (Conectado o componente TabHeader com o estado do Redux)
export default connect(null,mapDispatchToProps)(BillingCycle)