import React from 'react';
import './App.css';


class Footer extends React.Component {

    state = {
        isHidden:false
    };

    onAllFilterClick = () => {
        this.setState(
            {changeFilter : this.props.changeFilter('All')})
    };
    onCompletedFilterClick = () => {
        this.setState(
            {changeFilter : this.props.changeFilter('Completed')})
    };
    onActiveFilterClick = () => {
        this.setState(
            {changeFilter : this.props.changeFilter('Active')})
    };
    onShowFiltersClick = () => {
        this.setState(
            {isHidden:false})
    };
    onHideFiltersClick = () => {
        this.setState(
            {isHidden:true})
    };


    render = () => {
        let classForAll = this.props.filterValue === 'All' ? 'filter-active': '';
        let classForCompleted = this.props.filterValue === 'Completed' ? 'filter-active': '';
        let classForActive = this.props.filterValue === 'Active' ? 'filter-active': '';
        return (

                    <div className="todoList-footer">
                        { !this.state.isHidden && <div>
                        <button onClick={this.onAllFilterClick} className={classForAll}>All</button>
                        <button onClick={this.onCompletedFilterClick} className={classForCompleted}>Completed</button>
                        <button onClick={this.onActiveFilterClick} className={classForActive}>Active</button>
                        </div>}
                       <br/>
                        { this.state.isHidden && <span onClick={this.onShowFiltersClick }>show</span>}
                        { !this.state.isHidden && <span onClick={this.onHideFiltersClick}>hide</span>}


                    </div>
        );
    }
}

export default Footer;

