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
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PageRef)) return false;

        PageRef pageRef = (PageRef) o;

        return id != null ? id.equals(pageRef.id) : pageRef.id == null;
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }

    @Override
    public String toString() {
        return "PageRef{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                '}';
    }
}
