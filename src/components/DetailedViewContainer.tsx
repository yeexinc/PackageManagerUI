import * as React from "react";
import * as ReactDOM from "react-dom";

import{PackageVersion} from "./PackageVersion";
import {PackageVersionDetail} from "./PackageVersionDetail";

export interface DetailedViewProps {
    pkg : any;
}
export class DetailedViewContainer extends React.Component<DetailedViewProps, undefined> {
    render() {
        return (<div>
            
                <PackageVersion pkg={this.props.pkg} />
                
            </div>);
    }
}