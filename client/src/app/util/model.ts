import {IdInterface, getId} from "../util/comon";


export class Content {
    name: string;
    pageRefs: PageRef[];
}
export class PageRef implements IdInterface{
  id: string;
  title: string;
}

export class Page implements IdInterface{
  id:string;
  title: string;
  pageSegments: PageSegment[];

  constructor(title: string) {
    this.title = title;
    this.id = getId();
  }
}



export class PageSegment implements IdInterface{

  id:string;

  text: string;
  video: Video;
  image: Image;
  chart: Chart;

  constructor(id: string, text: string, video: Video, image: Image, chart: Chart) {
    // console.log("new PageSegment");
    // console.log("Text " + text);
    // console.log("Video " + video);
    // console.log("Image " + image);
    // console.log("id " + id);

    this.text = (text != null || text == "" ) ? text : null;

    this.video = video ? video : null;
    this.image = image ? image : null;
    this.chart = chart ? chart : null;
    this.id = id ? id : getId();

    // console.log("this.Text " + this.text);
    // console.log("this.Video " + this.video);
    // console.log("this.Image " + this.image);
    // console.log("this.id " + this.id);
  }

}

export class Video {

  constructor(){}
}

export class Image {
  url: string;
  caption: string;

  constructor(url: string, caption: string) {
    this.url = url;
    this.caption = caption;
  }

}

export class Chart {
  constructor(){}
}

export class ContetComponent {
    gallery: GalleryImage[];

    video: {
        videoPath: string;
        trackPath: string;
        metaTrackPath: string;
    };

    text: string[];
}

export class GalleryImage {
    path: string;
    caption: string;
}

export class VideoContet {
    videoPath: string;
    trackPath: string;
}

export class Cue implements IdInterface {
    id: string;
    endTime: number;
    startTime: number;

    title: string;
    description: string;
    shortDescription: string;
    src: string;
    kriterienclip: string;
    href: string;

    duration: number;
}
