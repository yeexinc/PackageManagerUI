import * as React from "react";

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
        this.state = { installed: false, hasUpdate: false};

        this.installPackage = this.installPackage.bind(this);
        this.updatePackage = this.updatePackage.bind(this);
        this.uninstallPackage = this.uninstallPackage.bind(this);
    }

    installPackage() {
    }

    updatePackage() {
    }

    uninstallPackage() {
    }

    render() {
        if (!this.state.installed) {
            return (<div className="InstallButtons" onClick={ this.installPackage }>INSTALL</div>);
        }
        else {
            return (<div>
                        <div className="InstallButtons" onClick={ this.uninstallPackage }>UNINSTALL</div>
                        <div  className="InstallButtons" onClick={ this.updatePackage } hidden={!this.state.hasUpdate}>UPDATE</div>
                    </div>);
        }
    }
}