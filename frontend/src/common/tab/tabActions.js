export function selectTab(tabId){
    
    return {
        type:'TAB_SELECTED',
        payload: tabId
    }    
}


export function showTabs(...TabIds){
    const tasbToShow ={}
    TabIds.forEach(e=>tasbToShow[e]= true)
    return{
        type:'TAB_SHOWED',
        payload:tasbToShow
    }

}