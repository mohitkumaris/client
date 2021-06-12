import React from "react";
import { connect } from "react-redux";
import { editStream, fetchStream } from "../../actions/index";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    console.log(this.props.stream);
    if (!this.props.stream) {
      return <div>Loading..</div>;
    }
    return (
      <div>
        <h1> Edit a Stream</h1>
        <StreamForm
          initialValues={this.props.stream}
          onSubmit={this.onSubmit}
        ></StreamForm>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // ownProps is used to get props values which is same as props in component function.
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { editStream, fetchStream })(
  StreamEdit
);
