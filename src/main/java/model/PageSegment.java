package model;

/**
 * Created by hagen on 20.12.2016.
 */
public class PageSegment {
    public String id;
    public String text;

    @Override
    public String toString() {
        return "PageSegment{" +
                "id='" + id + '\'' +
                ", text='" + text + '\'' +
                '}';
    }
}
