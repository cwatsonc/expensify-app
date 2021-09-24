import React from 'react';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined,
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [], selectedOption: undefined }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option) }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randomNum];
        this.setState(() => ({ selectedOption }));
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (ex) {
            //do nothing
        }

    }

    componentWillUnmount() {
        //console.log('cwu');
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        const title = 'blow me';
        const hasOptions = +(this.state.options.length > 0);
        console.log(`hasOptions: ${hasOptions}`)

        return (
            <div >
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={hasOptions}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            hasOptions={hasOptions}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        );
    }
}