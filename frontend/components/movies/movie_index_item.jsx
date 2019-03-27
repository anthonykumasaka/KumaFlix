import React from "react";
import { Link } from "react-router-dom";
import { createListItem } from "../../actions/list_items_actions"
import {connect} from 'react-redux';


class MovieIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list_id = this.props.list_id;
    const movie_id = this.props.movie.id;
    return (
      <div className="tile">
        <div className="tile__media">
          <img  className="tile__img" src={this.props.movie.photo} alt="" />
        </div>
        <div className="tile__details">
          <div className="tile__title">
            <div className="ow">
              <Link to={`/play/${this.props.movie.id}`}>
                <div className="down-arrow-play"></div>
              </Link>
              {/* <button onClick={(e) => (this.props.createListItem({list_item: {
          list_id,
          movie_id
        }}))} className="add_list"> */}
            <div className="add_list"> 

            </div>
              {/* <i class="fa fa-caret-down"></i> */}
              <i onClick={(e) => (this.props.setDropDown(this.props.movie.id))} className="fa fa-angle-down" aria-hidden="true"></i>
              {/* <div onClick={(e) => (this.props.setDropDown(this.props.movie.id))} className="down-arrow-info"></div> */}
              <h2 onClick={(e) => (this.props.setDropDown(this.props.movie.id))}>{this.props.movie.title}</h2>
              <div onClick={(e) => (this.props.setDropDown(this.props.movie.id))}>{this.props.movie.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mstp = (state, ownProps) => {
  const list_ids = Object.values(state.entities.list_items).map(item => item.movie_id);
  return ({
    list_items: Object.values(state.entities.list_items),
    list_id: state.entities.users[state.session.id].list_id,
    // onlist: list_ids.includes(ownProps.movie.id)
  });
};

const mdp = (dispatch) => {
  return {
    createListItem: (data) => dispatch(createListItem(data))
  };
};


export default connect(mstp, mdp)(MovieIndexItem);