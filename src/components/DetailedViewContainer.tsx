import * as React from "react";
import * as ReactDOM from "react-dom";

export interface DetailedViewProps {
    packageId: string
}

export class DetailedViewContainer extends React.Component<DetailedViewProps, undefined> {
    render() {
        return (<div>{ this.props.packageId }</div>);
    }
}
