package io.testscucumber.backend.reportconverter.domain;

import java.io.InputStream;

public interface ReportConverterService {

    void convertAndSaveFeatures(String testRunId, InputStream featureStream, String group, boolean dryRun, boolean onlyNewScenarii);

}
