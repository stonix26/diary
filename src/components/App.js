import React, { Component } from 'react';
import { db } from '../firebase';
import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props);
    // State
    this.state = {
      title: '',
      body: '',
      notes: {}
    }
    // Bind
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayNotes = this.displayNotes.bind(this);
  }

  // Lifecycle
  componentDidMount() {
    db.on('value', (snapshot) => {
      this.setState({
        notes: snapshot.val()
      });
    });
  }

  // Handle change
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Handle submit
  handleSubmit(event) {
    event.preventDefault();
    // console.log('Submitted');
    const note = {
      title: this.state.title,
      body: this.state.body
    }
    db.push(note);
    // Clear after submit
    this.setState({
      title: '',
      body: ''
    });
  }

  // Display post
  displayNotes() {
    return _.map(this.state.notes, (note, key) => {
      return (
        <div key="key">
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit = {this.handleSubmit}>
              <div className="form-group">
                <input
                  onChange = {this.handleChange}
                  value = {this.state.title}
                  type="text"
                  name="title"
                  className="form-control no-border"
                  placeholder="Title..."
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  onChange = {this.handleChange}
                  value = {this.state.body}
                  type="text"
                  name="body"
                  className="form-control no-border"
                  placeholder="Body..."
                  required
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary col-sm-12">Save</button>
              </div>
            </form>
            {this.displayNotes()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
