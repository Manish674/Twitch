import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="ui large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="ui container">
          <h3>Streams</h3>
          <div className="ui celled list">
            {this.renderList()}
          </div> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.stream) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
