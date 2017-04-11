import * as React from "react";
import * as ReactDOM from "react-dom";

export interface TabHeaderProps {
    iconUrls : string[],
    toolTips : string[],
    selectionIndex : number
}



export class TabHeader extends React.Component<TabHeaderProps, undefined> {
   
    render() {
        let tooptip = null;
        let idx = 0;
        let icons = this.props.iconUrls.map((item)=>{
            idx++;
            return (<div className="Tab">
                <img>{item}</img>
                <span className="tooltip">{this.props.toolTips[idx]}</span>
            </div>)
        };
        return(
            <div>
                {icons}
            </div>
        )
    }
}