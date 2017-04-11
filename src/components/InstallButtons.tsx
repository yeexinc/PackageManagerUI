import * as React from "react";
import * as DownloadUtils from "../utils/DownloadUtils";

export interface InstallButtonsProps {
    packageLink: string;
    packageName: string;
    packageVersion: string;
}

export interface InstallButtonsState {
    installed: boolean,
    hasUpdate: boolean
}

export class InstallButtons extends React.Component<InstallButtonsProps, InstallButtonsState> {

    constructor(props: InstallButtonsProps) {
        super(props);
        this.state = { installed: false, hasUpdate: true};

        this.installPackage = this.installPackage.bind(this);
        this.updatePackage = this.updatePackage.bind(this);
        this.uninstallPackage = this.uninstallPackage.bind(this);
    }

    installPackage() {
        DownloadUtils.downloadFile("");
        let state = this.state;
        this.setState({installed: true, hasUpdate: state.hasUpdate});
    }

    updatePackage() {
    }

    uninstallPackage() {
    }

    render() {
        if (!this.state.installed) {
            return (<div><div className="InstallButtons" onClick={ this.installPackage }>INSTALL</div></div>);
        }
        else {
            return (<div className="InstallButtonGroup">
                        <div className="InstallButtons" onClick={ this.uninstallPackage }>UNINSTALL</div>
                        <div  className="InstallButtons" onClick={ this.updatePackage } hidden={!this.state.hasUpdate}>UPDATE</div>
                    </div>);
        }
    }
}