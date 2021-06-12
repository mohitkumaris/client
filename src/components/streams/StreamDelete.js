import React from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import { deleteStream, fetchStream } from "../../actions/index";
import { connect } from "react-redux";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  deleteStream(id) {
    this.props.deleteStream(id);
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are You Sure you want to Delete";
    }
    return `Are You Sure you want to Delete with Title ?  ${this.props.stream.title}`;
  }
  renderAction = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => this.deleteStream(this.props.match.params.id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/" className="ui cancel button">
          Cancel
        </Link>
      </React.Fragment>
      // React Fragment it doesnt render on screen and use to show multiple element
    );
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderAction()}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
