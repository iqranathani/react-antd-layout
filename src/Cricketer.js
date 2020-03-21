import React, {Component} from 'react';

class Cricketer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : props.name,
            team : props.team
        }
        
    }
    getName = () => this.state.name;
    
    render() {
        return (
            <div>
                <span>Team : {this.state.team}</span>
            </div>
        )
    }
}

export class Bowler extends Cricketer {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            wickets : props.wickets
        }
        
    }
    
    render() {
        return (
            <div>
                <span>name : {this.getName()}</span>
                {super.render()}
                <span>Wickets : {this.state.wickets}</span>
            </div>
        )
    }
}

export class Batsmen extends Cricketer {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            runs : props.runs
        }
        
    }
    
    render() {
        return (
            <div>
                <span>name : {this.getName()}</span>
                {super.render()}
                <span>Runs : {this.state.runs}</span>
            </div>
        )
    }
}