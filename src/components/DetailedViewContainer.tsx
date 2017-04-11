import * as React from "react";
import * as ReactDOM from "react-dom";

import { PackageVersionDetail } from "./PackageVersionDetail";

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
    }

    beginDownloadPackage(packageId: string) {

        fetch("/package/" + packageId)
            .then(function (response: Response) {

                return response.text();

            }).then(function (jsonString) {

                this.activePackageJson = JSON.parse(jsonString);

            });
    }

    render() {
        if (!this.state.packageJsonDownloaded) {
            return (<div>Select package to download...</div>);
        }

        let dependencies = ["jaz", "juice"];
        let content = this.activePackageJson.content;
        return (<PackageVersionDetail changeLog="foo" content={content} dependencies={dependencies} />);
    }
}
