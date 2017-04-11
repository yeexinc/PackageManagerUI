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
                <div className="PakcageRating">5</div>
                <div className="PakcageIcon">
                    <img className="PackageDownloadIcon" src="/resources/icons/download.png"/>
                </div>
                <div className="PackageDownload">{pkg.downloads}</div>
                <div className="PackageDescription">{pkg.description}</div>
            </div>
        );
    }
}