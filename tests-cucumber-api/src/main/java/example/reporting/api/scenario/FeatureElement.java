package example.reporting.api.scenario;

import com.google.common.base.MoreObjects;
import example.reporting.api.shared.BasicInfo;
import example.reporting.api.shared.Location;

import java.util.ArrayList;
import java.util.List;

public class FeatureElement {

    private BasicInfo info;

    private Location location;

    private List<Step> steps = new ArrayList<>();

    public BasicInfo getInfo() {
        return info;
    }

    public void setInfo(final BasicInfo info) {
        this.info = info;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(final Location location) {
        this.location = location;
    }

    public List<Step> getSteps() {
        return steps;
    }

    public void setSteps(final List<Step> steps) {
        this.steps = steps;
    }

    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this)
                .add("info", info)
                .add("location", location)
                .toString();
    }

}