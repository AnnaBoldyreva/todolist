import React from 'react';
import './App.css';


class Footer extends React.Component {
    render = () => {
        let classForAll = this.props.filterValue === 'All' ? 'filter-active': '';
        let classForCompleted = this.props.filterValue === 'Completed' ? 'filter-active': '';
        let classForActive = this.props.filterValue === 'Active' ? 'filter-active': '';
        return (

                    <div className="todoList-footer">
                        <button onClick={this.props.changeFilter} className={classForAll}>All</button>
                        <button onClick={this.props.changeFilter} className={classForCompleted}>Completed</button>
                        <button onClick={this.props.changeFilter} className={classForActive}>Active</button>

                    </div>
        );
    }
}

export default Footer;

