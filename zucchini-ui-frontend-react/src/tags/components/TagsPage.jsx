import PropTypes from 'prop-types';
import React from 'react';

import TagFilterFormContainer from './TagFilterFormContainer';
import TagsTableContainer from './TagsTableContainer';
import toNiceDate from '../../ui/toNiceDate';


export default class TagsPage extends React.Component {

  componentDidMount() {
    this.loadTestRunIfPossible();
  }

  componentDidUpdate(prevProps) {
    this.loadTestRunIfPossible(prevProps);
  }

  loadTestRunIfPossible(prevProps = {}) {
    const { testRunId } = this.props;

    if (testRunId !== prevProps.testRunId) {
      this.props.onLoad({ testRunId });
    }
  }

  render() {
    const { testRun } = this.props;

    return (
      <div>
        <h1>
          Tous les tags
          {' '}
          <small>{`Tir du ${toNiceDate(testRun.date)}`}</small>
        </h1>

        <hr />
        <h2>Statistiques sur les scénarios</h2>
        <TagFilterFormContainer />
        <TagsTableContainer />

      </div>
    );
  }

}

TagsPage.propTypes = {
  testRunId: PropTypes.string.isRequired,
  testRun: PropTypes.object,
  onLoad: PropTypes.func.isRequired,
};
