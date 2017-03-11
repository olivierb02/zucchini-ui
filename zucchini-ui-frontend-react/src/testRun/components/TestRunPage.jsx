import React from 'react';

import BasePage from '../../ui/components/BasePage';
import toNiceDate from '../../ui/toNiceDate';
import TestRunHistoryContainer from './TestRunHistoryContainer';


export default class TestRunPage extends React.Component {

  componentDidMount() {
    this.loadTestRunIfPossible({});
  }

  componentDidUpdate(prevProps) {
    this.loadTestRunIfPossible(prevProps);
  }

  render() {
    const { testRunId, testRun } = this.props;

    return (
      <BasePage title={`Tir du ${toNiceDate(testRun.date)}`}>
        <p><b>Identifiant du tir :</b> <code>{testRunId}</code></p>
        <hr />
        <h2>Historique</h2>
        <TestRunHistoryContainer testRunId={testRunId} testRunType={testRun.type} />
      </BasePage>
    );
  }

  loadTestRunIfPossible(prevProps) {
    const { testRunId } = this.props;

    if (testRunId !== prevProps.testRunId) {
      this.props.onLoad({ testRunId: this.props.testRunId });
    }
  }

}

TestRunPage.propTypes = {
  testRunId: React.PropTypes.string.isRequired,
  testRun: React.PropTypes.object,
  onLoad: React.PropTypes.func.isRequired,
};
