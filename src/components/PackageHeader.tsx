import * as React from "react";

export interface PackageHeaderProps {
    pkg: any
}

export class PackageHeader extends React.Component<PackageHeaderProps, undefined> {
    constructor(props: PackageHeaderProps) {
        super(props);
    }

    render() {
        let pkg = this.props.pkg; 

        return (
            <div className="PackageHeaderInfo">
                <div className="PakcageIcon">
                    <img className="PackageIcon" src="/resources/icons/package.png"/>
                </div>
                <div className="PackageName">{pkg.name}</div>
                <div className="PackageRating">5</div>
                <i className="fa fa-download"></i>
                <div className="PackageDownload">{pkg.downloads}</div>
                <div className="PackageDescription">{pkg.description}</div>
            </div>
        );
    }
}