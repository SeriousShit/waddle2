package model;

/**
 * Created by hagen on 06.12.2016.
 */
public class Page {
    public String title = "test";

    public Page(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "Page{" +
                "title='" + title + '\'' +
                '}';
    }
}
