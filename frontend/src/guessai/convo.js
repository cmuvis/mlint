import React, { Component } from 'react';
import './index.scss';

class Convo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generateAnswer: [],
            generateDisplay: [],
            time: 1,
            convo: [],
            typedAnswer: [],

        }
        this.answers = ["wolf", "bug", "dog", "cat", "fur", "cotton", "fabric", "web", "spider", "fox", "rubber", "mouse", "flower", "polar bear", "vase", "plant", "mint", "daisy", "mouse", "glass", "cosmos", "space", "blanket", "monkey", "otter", "goose", "lion", "bird", "peacock", "sky", "ceramic", "cotton", "linen"];
        //lists of answers for automated players guessing when a hint is given
        this.hintAnswer_animal = ["poodle", "alphaca", "lama", "snake", "spider", "cat", "parrot", "jellyfish", "otter", "frog", "bee", "butterfly", "shark", "turtle", "tiger", "bear", "deer", "mouse", "hamster"];
        this.hintAnswer_object = ["acorn", "plum", "bottle", "balloon", "confetti", "toaster", "camera", "socks", "strawberry", "castle", "train", "soccer ball", "vacuum", "spoon", "desk", "bed", "corn", "pumpkin", "candy"]
        this.convo = [];
        this.answer = this.props.answer;
        this.score = this.props.score;
    }
    componentDidMount() {
        //start the interval for generating speech bubbles of answers
        this.convoGenerate()
    }
    componentWillUnmount() {
        if (this.props.saveAnswers) {
            //save answers to show it on the score modal
            this.props.saveAnswers(this.state.typedElement, this.state.generateAnswer);
        }
        clearInterval(this.convo);
    }
    //if someone guessed the answer correctly, run this function
    rightAnswer(n, i = undefined) {
        clearInterval(this.convo);
        this.props.clearTimer();
        //the one who guessed right get score
        this.score[n][1] += 20;
        //if somebody guessed right, the one who selected the original image get always get the score
        this.score[this.props.turns[this.props.entireRound - 1] - 1][1] += 20;
        if (i) {
            //if second person also guessed right... the person also gets the score. But this can only happen when there's hint.
            this.score[i][1] += 10;
            this.score[this.props.turns[this.props.entireRound - 1] - 1][1] += 10;
        }
        this.props.setScore(this.score);
        //disable the input
        this.setState({ disable: true, inputOpcity: .5 });
        window.setTimeout(function () { this.props.changeMode(4); }.bind(this), 300);
    }
    convoGenerate() {
        let answer;
        if (this.props.hintMode === true) {
            if (this.hintAnswer_animal.includes(this.props.answer.classLabels[0])) {
                answer = this.hintAnswer_animal;
            } else {
                answer = this.hintAnswer_object;
            }
        } else {
            answer = this.answers;
        }
        let answers, player, element, displayElement = [];

        //make the loading bubble animation opaque
        this.setState({ opacity: 1 });

        //if it's not home page of the game, display the convo for only 20 secs
        if (this.props.mode !== "home") {
            this.convo = setInterval(function () {
                answers = answer[Math.floor(Math.random() * answer.length)]
                element = this.state.generateAnswer;
                displayElement = this.state.generateDisplay;

                //if it's the player's guessing round, make the speaker random(either player 2 or 3)
                if (this.props.turns[this.props.entireRound - 1] === 1) {
                    player = (Math.floor(Math.random() * 2)) + 2;
                    let convo = <div key={"convoWarp" + element.length}>
                        <div className="convoWrap" key={"convo" + element.length}>
                            <div className={"bubble plyr" + (player)} key={"convoBubble" + element.length}>
                                {answers}
                            </div>
                            <div className={"profile plyr" + (player)} key={"profile" + element.length}>
                                <i className={this.props.players[player - 1]}></i>
                            </div>
                        </div>
                    </div>

                    element.push(convo);
                    displayElement.push(convo);
                } else {
                    //make a player speaking if it's the player's guessing round
                    switch (this.props.turns[this.props.entireRound - 1]) {
                        case 2: player = 3;
                                break;
                        case 3: player = 2;
                                break;
                    }
                    let convo = <div key={"convoWarp" + element.length}>
                        <div className="convoWrap" key={"convo" + element.length}>
                            <div className={"bubble plyr" + (player)} key={"convoBubble" + element.length}>
                                {answers}
                            </div>
                            <div className={"profile plyr" + (player)} key={"profile" + element.length}>
                                <i className={this.props.players[player - 1]}></i>
                            </div>
                        </div>
                    </div>
                    let displayConvo = <div key={"convoWarp" + element.length}>
                        <div className="convoWrap" key={"convo" + element.length}>
                            <div className={"bubble plyr" + (player)} key={"convoBubble" + element.length}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                            <div className={"profile plyr" + (player)} key={"profile" + element.length}>
                                <i className={this.props.players[player - 1]}></i>
                            </div>
                        </div>
                    </div>
                    element.push(convo);
                    displayElement.push(displayConvo);
                }
                if (this.answer.classLabels.includes(answers)) { this.rightAnswer(player - 1) }
                this.setState({ generateAnswer: element, generateDisplay: displayElement, time: (this.state.time * 1) + 1 });
                this.autoScroll()
            }.bind(this), 4000)
        }
        else {
            //generating convo on the home page
            this.convo = setInterval(function () {
                answers = answer[Math.floor(Math.random() * answer.length)]
                element = this.state.generateDisplay;
                player = (Math.floor(Math.random() * 2)) + 1;
                let convo = <div key={"convoWarp" + element.length}>
                    <div className="convoWrap" key={"convo" + element.length}>
                        <div className={"bubble plyr" + (player + 1)} key={"convoBubble" + element.length}>
                            {answers}
                        </div>
                        <div className={"profile plyr" + (player + 1)} key={"profile" + element.length}>
                            <i className={this.props.players[player]}></i>
                        </div>
                    </div>
                </div>
                element.push(convo);
                this.setState({ generateDisplay: element });
                this.autoScroll()
            }.bind(this), 4000)
        }
    }
    //if player 1 types answer  
    addAnswer() {
        let tanswer = document.getElementById("answerType");
        let answers = [tanswer.value.toLowerCase()];
        if (this.answer.classLabels.includes(tanswer.value.toLowerCase())) {
            this.rightAnswer(0)
        }
        let element = this.state.generateAnswer;
        let displayElement = this.state.generateDisplay;
        let typedElement = this.state.typedAnswer;
        typedElement.push(answers);

        let display = <div key={"convoWrap" + element.length}>
            <div className="convoWrap" key={"convo" + element.length}>
                <div className="bubble plyr1" key={"convoBubble" + element.length}>
                    {answers}
                </div>
                <div className="profile plyr1" key={"profile" + element.length}>
                    <i className={this.props.players[0]}></i>
                </div>
            </div>
        </div>
        element.push(display);
        displayElement.push(display);
        this.setState({ generateAnswer: element, generateDisplay: displayElement, typedAnswer: typedElement, time: (this.state.time * 1) + 1 });
        tanswer.value = "";
        window.setTimeout((ev) => { this.autoScroll() }, 10);
    }
    autoScroll() {
        let convoBox = document.getElementsByClassName("convo_inner")[0];
        if (convoBox) {
            convoBox.scrollTop = convoBox.scrollHeight - convoBox.clientHeight;
        }
    }
    renderInputBox() {
        if (this.props.typemode === true) {
            return <div className="typing">
                <div className="bubble all">
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                </div>
                <div className='profileWrap'>
                    <div className="profile player3">
                        <i className={this.props.players[2]}></i>
                    </div>
                    <div className="profile player2">
                        <i className={this.props.players[1]}></i>
                    </div>
                </div>
            </div>
        } else {
            return <div id="tAnsrWrap">
                <input type="text" id="answerType" style={{ opacity: this.state.inputOpcity }} disabled={this.state.disable} autoFocus onKeyPress={(ev) => {
                    if (ev.key === "Enter") { this.addAnswer() }
                }} />
                <div className="submit btn" onClick={this.addAnswer.bind(this)} style={{ opacity: this.state.inputOpcity }}>
                    Enter
                </div>
            </div>
        }
    }
    render() {
        return (
            <div style={{ height: "100%" }}>
                <div className="convo_inner">
                    {this.state.generateDisplay}
                </div>
                {this.renderInputBox()}
            </div>
        )

    }
}

export default Convo;