package model;

/**
 * Created by hagen on 20.12.2016.
 */
public class PageRef {
    public String id;
    public String title = "test";

    public PageRef(String id, String title) {
        this.id = id;
        this.title = title;
    }

    @Override
    public String toString() {
        return "PageRef{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                '}';
    }
}
