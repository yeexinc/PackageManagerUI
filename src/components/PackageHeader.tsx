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
                <div className="PackageHeaderInfoLeftPanel">
                    <div className="PackageIcon">
                        <img className="PackageIcon" src="./src/resources/icons/package.png"/>
                    </div>
                </div>
                    <div className="PackageHeaderInfoRightPanel">
                    <div className="PackageName">{pkg.name}</div>
                    <div className="PackageRating">
                        <i className="fa fa-star-o" />
                        5
                    </div>
                    <div className="PackageDownload">
                        <i className="fa fa-download" />
                        {pkg.downloads}
                    </div>
                </div>
            </div>
        );
    }
}