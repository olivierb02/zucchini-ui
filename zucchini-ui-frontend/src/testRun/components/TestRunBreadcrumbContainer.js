import { connect } from "react-redux";
import { createSelector, createStructuredSelector } from "reselect";
import queryString from "query-string";

import Breadcrumb from "../../ui/components/Breadcrumb";
import toNiceDate from "../../ui/toNiceDate";
import getTypeEnvName from "../../utils/testRunUtils";

const selectBreadcumbItems = createSelector(
  state => state.testRun.testRun,
  testRun => {
    return [
      {
        value: getTypeEnvName(testRun),
        link: {
          pathname: "/",
          search: queryString.stringify({ type: testRun.type })
        }
      },
      {
        value: `Tir du ${toNiceDate(testRun.date)}`
      }
    ];
  }
);

const selectProps = createStructuredSelector({
  items: selectBreadcumbItems
});

const TestRunBreadcrumbContainer = connect(selectProps)(Breadcrumb);

export default TestRunBreadcrumbContainer;
