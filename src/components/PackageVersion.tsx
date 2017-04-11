import * as React from 'react';
import {InstallButtons} from './InstallButtons';
import {PackageDetail} from "./PackageDetail"

export interface PackageVersionProps { pkg: any }
export interface PackageVersionStates { selectedVerIndex: number }

export function onPackageItemClick() {
    this.setState({ selectedVerIndex: 0 })
}

export class PackageVersion extends React.Component<PackageVersionProps, PackageVersionStates> {
    constructor(props: PackageVersionProps) {
        // Pass in a package JSON object for initialization: 
        // <PackageVersion pkg={listOfPackages[selectedIndex]}/>        
        super(props);
        this.state = { selectedVerIndex: 0 }
    }

    onVersionChange(event: any) {
        this.setState({ selectedVerIndex: event.target.value });
    }

    onPackageItemClick() {
        // Reset the selectedVerIndex when a package item is clicked
        this.setState({ selectedVerIndex: 0 })
    }

    render() {
        if (!this.props.pkg.versions) return <div></div>;
        else {
            let versions = this.props.pkg.versions;
            let options: JSX.Element[] = [];

            let worksWithDynamo = versions[this.state.selectedVerIndex].engine_version;

            for (let i = versions.length - 1; i >= 0; i--) {
                let index = versions.length - 1 - i;
                options.push(<option value={index}>{versions[i].version}</option>);
            }

            let dummyDependencies : string[] = ["foo"];
            let packageDetail : JSX.Element = 
                <PackageDetail changeLog="" content="" dependencies={dummyDependencies}/>

            return (
            <div className="VersionContainer">
                <div className="VersionName">{this.props.pkg.name}</div>
                <div className="VersionOptions"><select name="versions" onChange={this.onVersionChange.bind(this)}>{options}</select></div>
                <div>Works with Dynamo {worksWithDynamo}</div>
                <InstallButtons packageLink="" packageName="Foo" packageVersion="0.0.0" />
                <div className="PackageDetailView">{packageDetail}</div>
            </div>);
        }
    }
}
