import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class PrevPageLink extends Component {

    static defaultProps = {
        disabled: false,
        onClick: null
    }

    static propsTypes = {
        disabled: PropTypes.bool,
        onClick: PropTypes.func
    }
    
    render() {
        let className = classNames('p-paginator-prev p-paginator-element p-link', {'p-disabled': this.props.disabled});
        
        return (
            <button className={className} onClick={this.props.onClick} disabled={this.props.disabled}>
                <span className="p-paginator-icon pi pi-caret-left"></span>
            </button>
        );
    }
}