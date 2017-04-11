import * as React from "react";
import * as ReactDOM from "react-dom";

import { PackageHeader } from "./PackageHeader";
import { PackageVersion} from "./PackageVersion";

export interface DetailedViewProps {
    packageId: string
}

export interface DetailedViewState {
    packageJsonDownloaded: boolean
}

export class DetailedViewContainer extends React.Component<DetailedViewProps, DetailedViewState> {

    activePackageJson: any = null;

    constructor(props: DetailedViewProps) {
        super(props);

        this.state = {
            packageJsonDownloaded: false
        }

        this.beginDownloadPackage = this.beginDownloadPackage.bind(this);
        this.beginDownloadPackage(this.props.packageId); // Begin download
    }

    beginDownloadPackage(packageId: string) {

        let thisObject = this;
        fetch("/package/" + packageId)
            .then(function (response: Response) {

                return response.text();

            }).then(function (jsonString) {

                thisObject.activePackageJson = JSON.parse(jsonString);
                thisObject.setState({ packageJsonDownloaded: true });
            });
    }

    render() {
        if (!this.state.packageJsonDownloaded) {
            return (<div>Select package to download...</div>);
        }

        let dependencies = ["jaz", "juice"];
        let content = this.activePackageJson.content;
        return (<div id="DetailedViewContainer">
                    <PackageHeader pkg={content} />
                    <PackageVersion pkg={content}/>
                </div>);
    }
}
