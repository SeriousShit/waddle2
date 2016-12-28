package model.segments;

/**
 * Created by hagen on 28.12.2016.
 */
public class ImageSegment {
    String url;
    String caption;

    public ImageSegment(String url, String caption) {
        this.url = url;
        this.caption = caption;
    }

    @Override
    public String toString() {
        return "ImageSegment{" +
                "url='" + url + '\'' +
                ", caption='" + caption + '\'' +
                '}';
    }
}
