/**
 * Created by youssef on 10/12/16.
 */
import React from 'react';
import {NewsItem} from './NewsItem.jsx';

export var News = React.createClass({
    getInitialState: function () {
        return {
            items: [
                {title: 'Awesome news', votes: 0},
                {title: 'New Pixel Phone by Google', votes: 7},
                {title: 'New OP episode coming out tomorrow', votes: -2}
            ]
        };
    },
    handleNewItemKeyPress: function (e) {
        if (e.key === 'Enter') {
            this.handleNewItemClick();
        }
    },
    handleNewItemClick: function () {
        var state = this.state;
        state.items.push({title: document.getElementById('newItem').value, votes: 0});
        this.setState(state);
        document.getElementById('newItem').value = "";
    },
    voteUp: function (item) {
        var state = this.state;
        var index = state.items.indexOf(item);
        item.votes++;
        state.items[index] = item;
        this.setState(state);
    },
    voteDown: function (item) {
        var state = this.state;
        var index = state.items.indexOf(item);
        item.votes--;
        state.items[index] = item;
        this.setState(state);
    },
    render: function () {
        //sort items by votes
        var items = this.state.items;
        items = items.sort((a, b) => {
            return a.votes < b.votes ? 1 : (a.votes > b.votes ? -1 : 0);
        });

        var cItems = items.map((item, index) => {
            return (
                <NewsItem
                    title={item.title}
                    votes={item.votes}
                    key={index}
                    onVoteUp={this.voteUp.bind(this, item)}
                    onVoteDown={this.voteDown.bind(this, item)}
                />
            );
        });

        return (
            <div className="col-md-10 col-md-offset-1">
                <h1>News</h1>
                <div className="row">
                    <div className="col-md-12 box">
                        <div className="row">
                            <div className="box-header">
                                <div className="col-md-11">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="newItem"
                                        placeholder="What do you need to do?"
                                        onKeyPress={this.handleNewItemKeyPress}
                                    />
                                </div>
                                <button id="btn" className="btn btn-info col-md-1" onClick={this.handleNewItemClick}>
                                    <span className="glyphicon glyphicon-plus"></span>
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <table className="table">
                                <tbody>
                                {cItems}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});