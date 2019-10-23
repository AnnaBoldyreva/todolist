import React from 'react';
import './App.css';


class Footer extends React.Component {
    state = {
        isHidden:false
    };

    changeHidden = () => {
            this.setState({
                isHidden: true
            });
        };

    // onShowFiltersClick = () => {}
    // onHideFiltersClick = () => {}

    render = () => {
        let classForAll = this.props.filterValue === 'All' ? 'filter-active': '';
        let classForCompleted = this.props.filterValue === 'Completed' ? 'filter-active': '';
        let classForActive = this.props.filterValue === 'Active' ? 'filter-active': '';
        return (

                    <div className="todoList-footer">
                        <button onClick={()=>{this.props.changeFilter('All')}} className={classForAll}>All</button>
                        <button onClick={()=>{this.props.changeFilter('Completed')}} className={classForCompleted}>Completed</button>
                        <button onClick={()=>{this.props.changeFilter('Active')}} className={classForActive}>Active</button>
                       <br/>
                        { !this.state.isHidden && <span onClick={this.changeHidden}>hide</span>}
                        { this.state.isHidden && <span onClick={this.changeHidden}>show</span>}


                    </div>
        );
    }
}

export default Footer;

