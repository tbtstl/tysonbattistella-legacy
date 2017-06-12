import React from 'react';
import "./panel.scss";
import {WORK, LEARN, CONTACT} from '../../shared/js';

export class Panel extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            openPanel: props.openPanelType,
            activeItem: null
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.openPanelType !== this.state.openPanel){
            this.setState({openPanel: nextProps.openPanelType, activeItem: null});
        }
    }

    handlePanelItemInteracted(item, clicked=true){
        return () => {
            this.setState({activeItem: item});

            if (!clicked) return;

            if(item.target && !item.target.startsWith('mailto:')){
                window.open(`http://${item.target}`, '_blank');
            } else if (item.target && item.target.startsWith('mailto:')){
                window.open(item.target);
            }
        };
    }

    renderPanelDescription(){
        switch (this.state.openPanel){
            case WORK:
                return 'A few things I\'ve worked on 👷';
            case LEARN:
                return 'A timeline of me learning new things 🎓';
            case CONTACT:
                return 'Some ways to keep in touch. (If you offer 🍺 or ☕️ I\'ll get back to you ASAP).'
            default:
                return '';
        }
    }

    renderPanelList(){
        switch (this.state.openPanel){
            case WORK:
                return [
                    {dateStr: '2017-Present', name: 'The Visual Space', target: 'thevisual.space', description: 'The Visual Space is a collection of web experiments built using React and P5JS'},
                    {dateStr: '2015-Present', name: 'Telmediq', target: 'telmediq.com', description: 'Telmediq is a HIPAA compliant healthcare communications hub operating out of Victoria, British Columbia using Django and React.'},
                    {dateStr: '2015-Present', name: 'SD&ML', target: 'sdaml.club', description: 'SD&ML is a community of students and software enthusiasts interested in using the latest technologies and techniques to build innovative things. Every week, members listen to and share talks about a topic they are passionate about. Newcomers are always welcome.'},
                    {dateStr: '2016', name: 'Picmoji', target: 'picmoji.tysonbattistella.com', description: 'Picmoji is a ridiculously simple Django app that converts images into emoji art mosaics.'},
                    {dateStr: '2015', name: 'The Wishlist', target: 'thewishlist.xyz', description: 'The Wishlist is a MeteorJS application that serves as an online gift registry for holidays and events'}
                ];
            case LEARN:
                return [
                    {dateStr: '2017', name: 'Deep Learning Foundations', institution: 'Udacity'},
                    {dateStr: '2017', name: 'Software Evolution', institution: 'University of Victoria'},
                    {dateStr: '2017', name: 'Requirements Engineering', institution: 'University of Victoria'},
                    {dateStr: '2017', name: 'Critical Thinking', institution: 'University of Victoria'},
                    {dateStr: '2017', name: 'Database Systems', institution: 'University of Victoria'},
                    {dateStr: '2017', name: 'Foundations of Computer Science', institution: 'University of Victoria'},
                    {dateStr: '2016', name: 'Operating Systems', institution: 'University of Victoria'},
                    {dateStr: '2016', name: 'Technology and Society', institution: 'University of Victoria'},
                    {dateStr: '2016', name: 'Introduction to Microeconomics and Financial Project Evaluation', institution: 'University of Victoria'},
                    {dateStr: '2016', name: 'Computer Communications and Networks', institution: 'University of Victoria'},
                    {dateStr: '2016', name: 'Algorithms and Data Structures II', institution: 'University of Victoria'},
                    {dateStr: '2015', name: 'Human Computer Interaction', institution: 'University of Victoria'},
                    {dateStr: '2015', name: 'Continuous Time Signals and Systems', institution: 'University of Victoria'},
                    {dateStr: '2015', name: 'Algorithms and Data Structures I', institution: 'University of Victoria'},
                    {dateStr: '2015', name: 'Intro to Probability and Statistics', institution: 'University of Victoria'},
                    {dateStr: '2015', name: 'Software Development Methods', institution: 'University of Victoria'},
                    {dateStr: '2015', name: 'Calculus II', institution: 'University of Victoria'},
                    {dateStr: '2015', name: 'Concepts in Modern Astronomy', institution: 'University of Victoria'},
                    {dateStr: '2014', name: 'Logic and Foundations', institution: 'University of Victoria'},
                    {dateStr: '2014', name: 'Matrix Algebra for Engineers', institution: 'University of Victoria'},
                    {dateStr: '2014', name: 'Fundamentals of Programming II', institution: 'University of Victoria'},
                    {dateStr: '2014', name: 'Computer Architecture', institution: 'University of Victoria'},
                    {dateStr: '2014', name: 'Introductory Physics II', institution: 'University of Victoria'},
                    {dateStr: '2014', name: 'Engineering Mechanics', institution: 'University of Victoria'},
                    {dateStr: '2014', name: 'Design and Communication II', institution: 'University of Victoria'},
                    {dateStr: '2014', name: 'Engineering Chemistry', institution: 'University of Victoria'},
                    {dateStr: '2013', name: 'Introductory Physics', institution: 'University of Victoria'},
                    {dateStr: '2013', name: 'Calculus I', institution: 'University of Victoria'},
                    {dateStr: '2013', name: 'Intro to Professional Practice', institution: 'University of Victoria'},
                    {dateStr: '2013', name: 'Design I', institution: 'University of Victoria'},
                    {dateStr: '2013', name: 'Fundamentals of Programming with Engineering Applications', institution: 'University of Victoria'},
                ];
            case CONTACT:
                return [
                    {name: 'E-Mail', target: 'mailto:tysonbattistella@gmail.com'},
                    {name: 'Github', target: 'github.com/tysonbattistella'},
                    {name: 'Instagram', target: 'instagram.com/tysonbattistella'},
                    {name: 'Twitter', target: 'twitter.com/tbtstl'},
                    {name: 'LinkedIn', target: 'linkedin.com/in/tyson-battistella-000b1792'}
                ];
            default:
                return [];
        }
    }

    render(){
        const listItemClass = (name) => this.state.activeItem && this.state.activeItem.name === name ? 'panel-list-item is-active' : 'panel-list-item';
        return (
            <div className="panel">
                <div className="columns">
                    <div className="column">
                        <h2 className="panel-title title">{this.state.openPanel}</h2>
                        <h5 className="subtitle">{this.renderPanelDescription.bind(this)()}</h5>

                        <ul>
                            {this.renderPanelList.bind(this)().map((item, index)=>{
                                return (<li className={listItemClass(item.name)} key={index} onMouseOver={this.handlePanelItemInteracted.bind(this)(item, false)} onClick={this.handlePanelItemInteracted.bind(this)(item)}>
                                    <div className="columns">
                                        <div className="column is-2">
                                            <span className="text-muted"><small>{item.dateStr}</small></span>
                                        </div>
                                        <div className="column">
                                            {item.name}
                                            <small className="text-secondary description">
                                                {item.institution ? item.institution :
                                                    item.target ? (<a href={`${item.target.startsWith('mailto:') ? '' : 'http://'}${item.target}`} target="_blank" rel="noopener noreferrer">{item.target}</a>) :
                                                        'Contact Method goes here'}
                                            </small>
                                        </div>
                                    </div>
                                </li>)
                            })}
                        </ul>
                    </div>
                    <div className="column">
                        {this.state.activeItem ? this.state.activeItem.description : ''}
                        <div className="columns">
                            <div className="column is-half"/>
                            <div className="column">
                                {this.state.activeItem && this.state.activeItem.target ? <a className="brackets pull-right" href={`http://${this.state.activeItem.target}`} target="_blank" rel="noopener noreferrer">→ Check it out ←</a> : <div/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
