package model;

import java.util.ArrayList;

/**
 * Created by hagen on 06.12.2016.
 */
public class Page {
    public String id;

    public ArrayList<PageSegment> pageSegments = new ArrayList<>();

    public Page(String id,  ArrayList<PageSegment> pageSegments) {
        this.id = id;
        this.pageSegments = pageSegments;
    }

    public Page(String id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Page{" +
                "id='" + id + '\'' +
                ", pageSegments=" + pageSegments +
                '}';
    }
}
