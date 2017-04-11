import * as React from "react";
import * as ReactDOM from "react-dom";

import{PackageVersion} from "./PackageVersion";
import {PackageVersionDetail} from "./PackageVersionDetail";

export interface DetailedViewProps {
  
    packageId: string
}

export class DetailedViewContainer extends React.Component<DetailedViewProps, undefined> {
    render() {

        return (<div>{ this.props.packageId }</div>);
    }
}
