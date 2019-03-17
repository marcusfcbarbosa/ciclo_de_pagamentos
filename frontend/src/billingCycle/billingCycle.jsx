import React ,{Component} from 'react'
import ContentHeader from   '../common/template/contentHeader'
import Content from '../common/template/content'

import Tabs from    '../common/tab/tabs'
import TabsHeader from    '../common/tab/tabsHeader'
import TabsContent from    '../common/tab/tabsContent'
import TabHeader from    '../common/tab/tabHeader'
import TabContent from    '../common/tab/tabContent'

//conectando o redux para o gerenciamento de estado
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from '../common/tab/tabActions'


class BillingCycle extends Component{
    componentWillMount(){
        this.props.selectTab('tabList');
    }
    render(){
        return(
            <div>
                <ContentHeader tittle='Ciclo de Pagamentos' subtittle="Cadastro"/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>

                        <TabsContent>
                            <TabContent id='tabList'>
                                    <h1>Listar</h1>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                    <h1>Incluir</h1>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                    <h1>Atualizar</h1>
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

const mapStateToProps = state =>({ tab: state.tab })
const mapDispatchToProps = dispatch =>bindActionCreators({selectTab},dispatch) 

//decorator (Conectado o componente TabHeader com o estado do Redux)
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycle)



