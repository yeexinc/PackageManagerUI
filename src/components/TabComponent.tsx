
import * as React from "react";
import * as ReactDOM from "react-dom";
import { SearchBar } from "./SearchBar";
import { PackageList } from './PackageList';
import { TabHeader } from "./TabHeader";

export interface TabComponentState {
    selectedIndex : number;
}

export class TabComponent extends React.Component<undefined, TabComponentState> {

    tabCaptions: string[] = [];
    tabContents: JSX.Element[] = [];

    insertTab(caption: string, content: JSX.Element) {
        this.tabCaptions.push(caption);
        this.tabContents.push(content);
    }

    setTabSelection(index:number)
    {
        this.setState({selectedIndex:index});
    }

    render() {
        let urls=["/dist/resources/icons/tab-package.svg", "/dist/resources/icons/tab-library.svg"];
        let toolTips=["library view","package view"];
        let selectedIndex=0;
        return (
            <div>
                <TabHeader iconUrls={urls} toolTips={toolTips} selectionFunc={this.setTabSelection}/>
                <SearchBar />
                <PackageList />
            </div>);
    }

}
