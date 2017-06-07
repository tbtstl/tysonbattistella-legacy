import React, { Component } from 'react';
import TuringType from 'turing-type';
import "./App.scss";

import {WORK, LEARN, CONTACT} from './shared/js'
import {Header, Panel} from './components';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            openPanel: WORK,
            openDescriptionId: null
        };
    }

    componentDidMount(){
        const descriptionEl = document.getElementById('description');
        new TuringType(descriptionEl, 'Tyson Battistella is a web developer currently located on the south end of a ' +
            'small island on the west side of a large country in the north.', {
            accuracy: 0.8,
            interval: 30
        })
    }

    handleSetActivePanel(type){
        return () => {
            console.log('setting state to ', type);
            this.setState({openPanel: type, openDescriptionId: null});
        }
    }

    render() {
        const menuItemClass = (type) => {
            return this.state.openPanel === type ? 'brackets is-active' : 'brackets';
        };
        return (
            <div>
                <Header/>
                <div className="margin-1" id="description"/>
                <div className="container">
                    <div className="columns">
                        <div className="column is-2">
                            <aside className="menu">
                                <ul className="menu-list">
                                    <li><a onClick={this.handleSetActivePanel(WORK)} className={menuItemClass(WORK)}>{WORK}</a></li>
                                    <li><a onClick={this.handleSetActivePanel(LEARN)} className={menuItemClass(LEARN)}>{LEARN}</a></li>
                                    <li><a onClick={this.handleSetActivePanel(CONTACT)} className={menuItemClass(CONTACT)}>{CONTACT}</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="column">
                            <Panel openPanelType={this.state.openPanel}/>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default App;
