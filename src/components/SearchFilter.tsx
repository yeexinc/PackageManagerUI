import * as React from "react";


export class SearchFilter extends React.Component<undefined, undefined> {
    clickSearchFilter()
    {

    }

    render() {
        return (
                <div className="SearchFilter" onClick={this.clickSearchFilter}>
                    <img className="SearchFilterIcon" src="src/resources/icons/package.png" />
                </div>);
    }
}