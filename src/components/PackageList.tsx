import * as React from 'react';
import { PackageItem } from './PackageItem';
import { PackageVersion } from './PackageVersion';

export interface PackageListProps { }
export interface PackageListStates { packageJsonDownloaded: boolean, selectedIndex: number }

export class PackageList extends React.Component<PackageListProps, PackageListStates> {

    activePackageJson: any = null;

    constructor(props: PackageListProps) {
        super(props);
        this.state = { selectedIndex: -1, packageJsonDownloaded: false };
        this.setSelection = this.setSelection.bind(this);
        this.beginDownloadPackage = this.beginDownloadPackage.bind(this);
        this.beginDownloadPackage();
    }

    beginDownloadPackage() {

        let thisObject = this;
        fetch("/packages")
            .then(function (response: Response) {

                return response.text();

            }).then(function (jsonString) {
                thisObject.activePackageJson = JSON.parse(jsonString);
                thisObject.setState({ packageJsonDownloaded: true });
            });
    }

    setSelection(index: number) {
        this.setState({ selectedIndex: index })
    }

    render() {

        if (!this.state.packageJsonDownloaded) {
            return (<div>Downloading...</div>);
        }

        let index = 0;
        let pkgVersion = <div></div>;
        let pkgDetails = <div></div>;

        // let packageElements: JSX.Element[] = this.props.packages.map((pkg: any) =>
        //     <PackageItem index={++index} data={pkg} selected={index == this.state.selectedIndex} setSelection={this.setSelection} />
        // );

        // return (<div>{packageElements}{pkgVersion}{pkgDetails}</div>);
        return (<div>(Render Package items here)</div>);
    }
}