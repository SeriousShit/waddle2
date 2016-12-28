package model;

import model.segments.ChartSegment;
import model.segments.ImageSegment;
import model.segments.VideoSegment;

/**
 * Created by hagen on 20.12.2016.
 */
public class PageSegment {
    public String id;
    public String text;
    public VideoSegment video;
    public ImageSegment image;
    public ChartSegment chart;



    @Override
    public String toString() {
        return "PageSegment{" +
                "id='" + id + '\'' +
                ", text='" + text + '\'' +
                ", video=" + video +
                ", image=" + image +
                ", chart=" + chart +
                '}';
    }
}
