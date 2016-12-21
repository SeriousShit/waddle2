package model;

import java.util.ArrayList;

/**
 * Created by hagen on 06.12.2016.
 */
public class Content {
    public String name = "Waddle";
    public ArrayList<PageRef> pageRefs = new ArrayList<>();


    public Content(){

    }

    public void addPagRef(PageRef  pageRef){
        this.pageRefs.add(pageRef);
    }

    @Override
    public String toString() {
        return "Content{" +
                "name='" + name + '\'' +
                ", pageRefs=" + pageRefs +
                '}';
    }
}
