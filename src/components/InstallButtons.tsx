import * as React from "react";

export interface InstallButtonsProps {
}

export interface InstallButtonsState {
    installed: boolean,
    hasUpdate: boolean
}

export class InstallButtons extends React.Component<InstallButtonsProps, InstallButtonsState> {

    constructor(props: InstallButtonsProps) {
        super(props);
        this.state = { installed: false, hasUpdate: false};
    }

    render() {
        return (<div>Install Buttons</div>);
    }
}