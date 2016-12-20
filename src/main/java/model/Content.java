package model;

import java.util.ArrayList;

/**
 * Created by hagen on 06.12.2016.
 */
public class Content {
    public String name = "Waddle";
    public ArrayList<Page> pages = new ArrayList<>();


    public Content(){
        this.pages.add(new Page("1"));
        this.pages.add(new Page("2"));
    }

    public void addPage(Page page){
        this.pages.add(page);
    }

    @Override
    public String toString() {
        return "Content{" +
                "name='" + name + '\'' +
                ", pages=" + pages +
                '}';
    }
}
