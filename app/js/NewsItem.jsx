import React from 'react';

export var NewsItem = React.createClass({
    getInitialState: function () {
        return {title: '', votes: 0};
    },
    render: function () {
        return (
            <tr className="margin-5">
                <td className="col-md-9">
                    {this.props.title}
                </td>
                <td className={'col-md-1 '+(this.props.votes>0?'text-green':this.props.votes==0?'text-gray':'text-red')}>
                    {this.props.votes}
                </td>
                <td className="col-md-2">
                    <div className="btn-group pull-right" role="group" aria-label="...">
                        <button href="#" className="btn btn-success" onClick={this.props.onVoteUp}>
                            <span className="glyphicon glyphicon-arrow-up"></span>
                        </button>
                        <button href="#" className="btn btn-danger" onClick={this.props.onVoteDown}>
                            <span className="glyphicon glyphicon-arrow-down"></span>
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
});