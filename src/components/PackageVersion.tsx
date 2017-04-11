import * as React from 'react';
import { InstallButtons } from './InstallButtons';
import { PackageVersionDetail } from "./PackageVersionDetail"

export interface PackageVersionProps { pkg: any }
export interface PackageVersionStates { selectedVerIndex: number }

export function onPackageItemClick() {
    this.setState({ selectedVerIndex: 0 })
}

export class PackageVersion extends React.Component<PackageVersionProps, PackageVersionStates> {
    prevPkg: any;

    constructor(props: PackageVersionProps) {
        // Pass in a package JSON object for initialization: 
        // <PackageVersion pkg={listOfPackages[selectedIndex]}/>        
        super(props);
        this.state = { selectedVerIndex: 0 }
        this.prevPkg = props.pkg;
    }

    onVersionChange(event: any) {
        this.setState({ selectedVerIndex: event.target.value });
    }

    onPackageItemClick() {
        this.setState({ selectedVerIndex: 0 })
    }

    render() {
        if (this.prevPkg != this.props.pkg) {
            // Reset selectedVerIndex in states and refresh the section
            this.onPackageItemClick();
            this.prevPkg = this.props.pkg;
            return <div></div>;
        }
        let versions = null;
        if (this.props.pkg.versions) { 
            versions = this.props.pkg.versions;
        }
        let selectedVersion = versions[this.state.selectedVerIndex];
        let change_log = selectedVersion.change_log;
        let content = selectedVersion.content;
        let deps: string[] = selectedVersion.full_dependency_ids.map((dep: any) => dep.name);
        let packageDetail: JSX.Element =
            <PackageVersionDetail changeLog={change_log} content={content} dependencies={deps} />;
        let options: JSX.Element[] = [];

        if (versions) {
            for (let i = versions.length - 1; i >= 0; i--) {
                let index = versions.length - 1 - i;
                options.push(<option value={index}>{versions[i].version}</option>);
            }
        }
        return (
            <div className="VersionContainer">
                <div className="VersionName">{this.props.pkg.name}</div>
                <div className="VersionOptions"><select name="versions" onChange={this.onVersionChange.bind(this)}>{options}</select></div>
                <div>Works with Dynamo {versions == null ? "" : versions[this.state.selectedVerIndex].engine_version}</div>
                <InstallButtons packageLink="" packageName="Foo" packageVersion="0.0.0" />
                <div className="PackageDetailView">{packageDetail}</div>
            </div>);
    }
}