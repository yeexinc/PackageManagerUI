import * as React from "react";
import * as ReactDOM from "react-dom";

export interface DetailedViewProps {
    packages : any;
}
export class DetailedViewContainer extends React.Component<DetailedViewProps, undefined> {
    render() {
        return (<div>
                this.props.packages[0].name;
            </div>);
    }
}