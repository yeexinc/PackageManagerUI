import * as React from "react";
import * as ReactDOM from "react-dom";

export interface TabHeaderProps {
    iconUrls : string[],
    toolTips : string[],
    selectionFunc : SetTabSelectionFunc
}

export interface TabHeaderState {
    selectionIndex : number
}

export interface SetTabSelectionFunc {
    (index:number):void
}


export class TabHeader extends React.Component<TabHeaderProps, TabHeaderState> {
    constructor(props:TabHeaderProps)
    {
        super(props);
        this.tabClicked = this.tabClicked.bind(this);
        this.state = {selectionIndex : -1};
    }

   tabClicked() {
        this.props.selectionFunc(this.state.selectionIndex);
   }

    render() {
        let tooptip = null;
        let idx = -1;
        let icons = this.props.iconUrls.map((item)=>{
            //this.setState({selectionIndex:idx++});
            idx++;
            return (
                <div className="Tab" onClick={this.tabClicked}>
                <img src={item} width="50%" height="auto"/>
                <span className="tooltip">{this.props.toolTips[idx]}</span>
            </div>)
        });
        return(
            <div className="TabHeader">
                {icons}
            </div>
        )
    }
}