import React from 'react';
import Option from './Option.js';




const Options = (props) => (

    <div >
        <div className="widget-header" >
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button button--link"
                disabled={!props.hasOptions}
                onClick={(e) => { props.handleDeleteOptions(); }}>Remove All</button>
        </div >
        {!props.hasOptions && <p className="widget__message" >Add an option to get started</p>}
        {
            props.options.map((option, idx) => (
                <Option
                    key={option}
                    count={idx + 1}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div >
);

export default Options;