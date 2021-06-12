import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions/index";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin = (stream) => {
    if (stream.userId === this.props.userID) {
      return (
        <div>
          <Link
            to={`/streams/edit/${stream.id}`}
            className="ui right floated positive basic button"
          >
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui right floated negative basic button"
          >
            Delete
          </Link>
        </div>
      );
    }
  };
  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">{stream.title}</div>
          <div className="description">{stream.description}</div>
        </div>
      );
    });
  };
  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/streams/new" className="ui right floated primary button">
            Create Stream
          </Link>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <h1>Streams</h1>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    streams: Object.values(state.streams),
    userID: state.auth.userID,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
