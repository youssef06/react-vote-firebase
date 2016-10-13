(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.News = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NewsItem = require('./NewsItem.jsx');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by youssef on 10/12/16.
 */
var News = exports.News = _react2.default.createClass({
    displayName: 'News',

    getInitialState: function getInitialState() {
        return {
            items: [{ title: 'Awesome news', votes: 0 }, { title: 'New Pixel Phone by Google', votes: 7 }, { title: 'New OP episode coming out tomorrow', votes: -2 }]
        };
    },
    handleNewItemKeyPress: function handleNewItemKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleNewItemClick();
        }
    },
    handleNewItemClick: function handleNewItemClick() {
        var state = this.state;
        state.items.push({ title: document.getElementById('newItem').value, votes: 0 });
        this.setState(state);
        document.getElementById('newItem').value = "";
    },
    voteUp: function voteUp(item) {
        var state = this.state;
        var index = state.items.indexOf(item);
        item.votes++;
        state.items[index] = item;
        this.setState(state);
    },
    voteDown: function voteDown(item) {
        var state = this.state;
        var index = state.items.indexOf(item);
        item.votes--;
        state.items[index] = item;
        this.setState(state);
    },
    render: function render() {
        var _this = this;

        //sort items by votes
        var items = this.state.items;
        items = items.sort(function (a, b) {
            return a.votes < b.votes ? 1 : a.votes > b.votes ? -1 : 0;
        });

        var cItems = items.map(function (item, index) {
            return _react2.default.createElement(_NewsItem.NewsItem, {
                title: item.title,
                votes: item.votes,
                key: index,
                onVoteUp: _this.voteUp.bind(_this, item),
                onVoteDown: _this.voteDown.bind(_this, item)
            });
        });

        return _react2.default.createElement(
            'div',
            { className: 'col-md-10 col-md-offset-1' },
            _react2.default.createElement(
                'h1',
                null,
                'News'
            ),
            _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-12 box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'box-header' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-11' },
                                _react2.default.createElement('input', {
                                    type: 'text',
                                    className: 'form-control',
                                    id: 'newItem',
                                    placeholder: 'What do you need to do?',
                                    onKeyPress: this.handleNewItemKeyPress
                                })
                            ),
                            _react2.default.createElement(
                                'button',
                                { id: 'btn', className: 'btn btn-info col-md-1', onClick: this.handleNewItemClick },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-plus' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'table',
                            { className: 'table' },
                            _react2.default.createElement(
                                'tbody',
                                null,
                                cItems
                            )
                        )
                    )
                )
            )
        );
    }
});

},{"./NewsItem.jsx":2,"react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NewsItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsItem = exports.NewsItem = _react2.default.createClass({
    displayName: 'NewsItem',

    getInitialState: function getInitialState() {
        return { title: '', votes: 0 };
    },
    render: function render() {
        return _react2.default.createElement(
            'tr',
            { className: 'margin-5' },
            _react2.default.createElement(
                'td',
                { className: 'col-md-9' },
                this.props.title
            ),
            _react2.default.createElement(
                'td',
                { className: 'col-md-1 ' + (this.props.votes > 0 ? 'text-green' : this.props.votes == 0 ? 'text-gray' : 'text-red') },
                this.props.votes
            ),
            _react2.default.createElement(
                'td',
                { className: 'col-md-2' },
                _react2.default.createElement(
                    'div',
                    { className: 'btn-group pull-right', role: 'group', 'aria-label': '...' },
                    _react2.default.createElement(
                        'button',
                        { href: '#', className: 'btn btn-success', onClick: this.props.onVoteUp },
                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-arrow-up' })
                    ),
                    _react2.default.createElement(
                        'button',
                        { href: '#', className: 'btn btn-danger', onClick: this.props.onVoteDown },
                        _react2.default.createElement('span', { className: 'glyphicon glyphicon-arrow-down' })
                    )
                )
            )
        );
    }
});

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _News = require('./News.jsx');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newsComponent = _reactDom2.default.render(_react2.default.createElement(_News.News, null), document.getElementById('app')); /**
                                                                                                                                 * Created by youssef on 10/10/16.
                                                                                                                                 */

},{"./News.jsx":1,"react":"react","react-dom":"react-dom"}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvTmV3cy5qc3giLCJhcHAvanMvTmV3c0l0ZW0uanN4IiwiYXBwL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNHQTs7OztBQUNBOzs7O0FBSkE7OztBQU1PLElBQUksc0JBQU8sZ0JBQU0sV0FBTixDQUFrQjtBQUFBOztBQUNoQyxxQkFBaUIsMkJBQVk7QUFDekIsZUFBTztBQUNILG1CQUFPLENBQ0gsRUFBQyxPQUFPLGNBQVIsRUFBd0IsT0FBTyxDQUEvQixFQURHLEVBRUgsRUFBQyxPQUFPLDJCQUFSLEVBQXFDLE9BQU8sQ0FBNUMsRUFGRyxFQUdILEVBQUMsT0FBTyxvQ0FBUixFQUE4QyxPQUFPLENBQUMsQ0FBdEQsRUFIRztBQURKLFNBQVA7QUFPSCxLQVQrQjtBQVVoQywyQkFBdUIsK0JBQVUsQ0FBVixFQUFhO0FBQ2hDLFlBQUksRUFBRSxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNuQixpQkFBSyxrQkFBTDtBQUNIO0FBQ0osS0FkK0I7QUFlaEMsd0JBQW9CLDhCQUFZO0FBQzVCLFlBQUksUUFBUSxLQUFLLEtBQWpCO0FBQ0EsY0FBTSxLQUFOLENBQVksSUFBWixDQUFpQixFQUFDLE9BQU8sU0FBUyxjQUFULENBQXdCLFNBQXhCLEVBQW1DLEtBQTNDLEVBQWtELE9BQU8sQ0FBekQsRUFBakI7QUFDQSxhQUFLLFFBQUwsQ0FBYyxLQUFkO0FBQ0EsaUJBQVMsY0FBVCxDQUF3QixTQUF4QixFQUFtQyxLQUFuQyxHQUEyQyxFQUEzQztBQUNILEtBcEIrQjtBQXFCaEMsWUFBUSxnQkFBVSxJQUFWLEVBQWdCO0FBQ3BCLFlBQUksUUFBUSxLQUFLLEtBQWpCO0FBQ0EsWUFBSSxRQUFRLE1BQU0sS0FBTixDQUFZLE9BQVosQ0FBb0IsSUFBcEIsQ0FBWjtBQUNBLGFBQUssS0FBTDtBQUNBLGNB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QUE7QUFBQSxzQkFBSyxXQUFVLHNCQUFmLEVBQXNDLE1BQUssT0FBM0MsRUFBbUQsY0FBVyxLQUE5RDtBQUNJO0FBQUE7QUFBQSwwQkFBUSxNQUFLLEdBQWIsRUFBaUIsV0FBVSxpQkFBM0IsRUFBNkMsU0FBUyxLQUFLLEtBQUwsQ0FBVyxRQUFqRTtBQUNJLGdFQUFNLFdBQVUsOEJBQWhCO0FBREoscUJBREo7QUFJSTtBQUFBO0FBQUEsMEJBQVEsTUFBSyxHQUFiLEVBQWlCLFdBQVUsZ0JBQTNCLEVBQTRDLFNBQVMsS0FBSyxLQUFMLENBQVcsVUFBaEU7QUFDSSxnRUFBTSxXQUFVLGdDQUFoQjtBQURKO0FBSko7QUFESjtBQVBKLFNBREo7QUFvQkg7QUF6Qm1DLENBQWxCLENBQWY7Ozs7O0FDQ1A7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBSSxnQkFBZ0IsbUJBQVMsTUFBVCxDQUNoQiwrQ0FEZ0IsRUFFaEIsU0FBUyxjQUFULENBQXdCLEtBQXhCLENBRmdCLENBQXBCLEMsQ0FQQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENyZWF0ZWQgYnkgeW91c3NlZiBvbiAxMC8xMi8xNi5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TmV3c0l0ZW19IGZyb20gJy4vTmV3c0l0ZW0uanN4JztcblxuZXhwb3J0IHZhciBOZXdzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdBd2Vzb21lIG5ld3MnLCB2b3RlczogMH0sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnTmV3IFBpeGVsIFBob25lIGJ5IEdvb2dsZScsIHZvdGVzOiA3fSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdOZXcgT1AgZXBpc29kZSBjb21pbmcgb3V0IHRvbW9ycm93Jywgdm90ZXM6IC0yfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgaGFuZGxlTmV3SXRlbUtleVByZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTmV3SXRlbUNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZU5ld0l0ZW1DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKHt0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0l0ZW0nKS52YWx1ZSwgdm90ZXM6IDB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdJdGVtJykudmFsdWUgPSBcIlwiO1xuICAgIH0sXG4gICAgdm90ZVVwOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICB2YXIgaW5kZXggPSBzdGF0ZS5pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBpdGVtLnZvdGVzKys7XG4gICAgICAgIHN0YXRlLml0ZW1zW2luZGV4XSA9IGl0ZW07XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIH0sXG4gICAgdm90ZURvd246IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHZhciBpbmRleCA9IHN0YXRlLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGl0ZW0udm90ZXMtLTtcbiAgICAgICAgc3RhdGUuaXRlbXNbaW5kZXhdID0gaXRlbTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9zb3J0IGl0ZW1zIGJ5IHZvdGVzXG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XG4gICAgICAgIGl0ZW1zID0gaXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEudm90ZXMgPCBiLnZvdGVzID8gMSA6IChhLnZvdGVzID4gYi52b3RlcyA/IC0xIDogMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjSXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOZXdzSXRlbVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgdm90ZXM9e2l0ZW0udm90ZXN9XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIG9uVm90ZVVwPXt0aGlzLnZvdGVVcC5iaW5kKHRoaXMsIGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICBvblZvdGVEb3duPXt0aGlzLnZvdGVEb3duLmJpbmQodGhpcywgaXRlbSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTFcIj5cbiAgICAgICAgICAgICAgICA8aDE+TmV3czwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuZXdJdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG5lZWQgdG8gZG8/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmhhbmRsZU5ld0l0ZW1LZXlQcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnRuXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGNvbC1tZC0xXCIgb25DbGljaz17dGhpcy5oYW5kbGVOZXdJdGVtQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y0l0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgdmFyIE5ld3NJdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge3RpdGxlOiAnJywgdm90ZXM6IDB9O1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwibWFyZ2luLTVcIj5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLW1kLTlcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXsnY29sLW1kLTEgJysodGhpcy5wcm9wcy52b3Rlcz4wPyd0ZXh0LWdyZWVuJzp0aGlzLnByb3BzLnZvdGVzPT0wPyd0ZXh0LWdyYXknOid0ZXh0LXJlZCcpfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudm90ZXN9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgcHVsbC1yaWdodFwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCIuLi5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uVm90ZVVwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LXVwXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uVm90ZURvd259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctZG93blwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgeW91c3NlZiBvbiAxMC8xMC8xNi5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtOZXdzfSBmcm9tICcuL05ld3MuanN4JztcblxudmFyIG5ld3NDb21wb25lbnQgPSBSZWFjdERPTS5yZW5kZXIoXG4gICAgPE5ld3MgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG4iXX0=
