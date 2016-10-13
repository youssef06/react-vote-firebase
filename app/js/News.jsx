/**
 * Created by youssef on 10/12/16.
 */
import React from 'react';
import firebase from 'firebase';
import {NewsItem} from './NewsItem.jsx';
import {config} from './config';

export var News = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            items: []
        };
    },
    componentDidMount: function () {
        firebase.initializeApp(config.firebase);

        firebase.database().ref('itemss').on('value', (data) => {
            var oItems = data.val();
            var items = [];
            for (var key in oItems) {
                var item = oItems[key];
                item.key = key;
                items.push(item);
            }

            this.setState({items: items, isLoading: false});
        });
    },
    handleNewItemKeyPress: function (e) {
        if (e.key === 'Enter') {
            this.handleNewItemClick();
        }
    },
    handleNewItemClick: function () {
        firebase.database().ref('itemss').push({
            title: document.getElementById('newItem').value,
            votes: 0
        });
        document.getElementById('newItem').value = "";
    },
    voteUp: function (item) {
        item.votes++;
        firebase.database().ref(`itemss/${item.key}`).set({title: item.title, votes: item.votes});
    },
    voteDown: function (item) {
        item.votes--;
        firebase.database().ref(`itemss/${item.key}`).set({title: item.title, votes: item.votes});

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
                <h1>News Voting</h1>
                <h2>(with React and Firebase)</h2>
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
                                {this.state.isLoading ? <tr>
                                    <td colSpan="3" className="text-center">
                                        <svg width='40px' height='40px' xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
                                             className="uil-default">
                                            <rect x="0" y="0" width="100" height="100" fill="none"
                                                  className="bk"></rect>
                                            <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#b8494b'
                                                  transform='rotate(0 50 50) translate(0 -30)'>
                                                <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0s'
                                                         repeatCount='indefinite'/>
                                            </rect>
                                            <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#b8494b'
                                                  transform='rotate(30 50 50) translate(0 -30)'>
                                                <animate attributeName='opacity' from='1' to='0' dur='1s'
                                                         begin='0.08333333333333333s' repeatCount='indefinite'/>
                                            </rect>
                                            <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#b8494b'
                                                  transform='rotate(60 50 50) translate(0 -30)'>
                                                <animate attributeName='opacity' from='1' to='0' dur='1s'
                                                         begin='0.16666666666666666s' repeatCount='indefinite'/>
                                            </rect>
                                            <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#b8494b'
                                                  transform='rotate(90 50 50) translate(0 -30)'>
                                                <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.25s'
                                                         repeatCount='indefinite'/>
                                            </rect>
                                            <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#b8494b'
                                                  transform='rotate(120 50 50) translate(0 -30)'>
                                                <animate attributeName='opacity' from='1' to='0' dur='1s'
                                                         begin='0.3333333333333333s' repeatCount='indefinite'/>
                                            </rect>
                                            <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#b8494b'
                                                  transform='rotate(150 50 50) translate(0 -30)'>
                                                <animate attributeName='opacity' from='1' to='0' dur='1s'
                                                         begin='0.4166666666666667s' repeatCount='indefinite'/>
                                            </rect>
                                            <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#b8494b'
                                                  transform='rotate(180 50 50) translate(0 -30)'>
                                                <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5s'
                                                         repeatCount='indefinite'/>
                                            </rect>
                                            <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#b8494b'
                                                  transform='rotate(210 50 50) translate(0 -30)'>
                                                <animate attributeName='opacity' from='1' to='0' dur='1s'
                                                         begin='0.5833333333333334s' repeatCount='indefinite'/>
                                            </rect>
                                            <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#b8494b'
                                                  transform='rotate(240 50 50) translate(0 -30)'>
                                                <animate attributeName='opacity' from='1' to='0' dur='1s'
                                                         begin='0.6666666666666666s' repeatCount='indefinite'/>
                                            </rect>
                                            <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#b8494b'
                                                  transform='rotate(270 50 50) translate(0 -30)'>
                                                <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.75s'
                                                         repeatCount='indefinite'/>
                                            </rect>
                                            <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#b8494b'
                                                  transform='rotate(300 50 50) translate(0 -30)'>
                                                <animate attributeName='opacity' from='1' to='0' dur='1s'
                                                         begin='0.8333333333333334s' repeatCount='indefinite'/>
                                            </rect>
                                            <rect x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#b8494b'
                                                  transform='rotate(330 50 50) translate(0 -30)'>
                                                <animate attributeName='opacity' from='1' to='0' dur='1s'
                                                         begin='0.9166666666666666s' repeatCount='indefinite'/>
                                            </rect>
                                        </svg>
                                    </td>
                                </tr> : <tr>
                                    <td colSpan="3"></td>
                                </tr>}
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