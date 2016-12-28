package model.segments;

/**
 * Created by hagen on 28.12.2016.
 */
public class VideoSegment {
    String url;

    public VideoSegment(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "VideoSegment{" +
                "url='" + url + '\'' +
                '}';
    }
}
