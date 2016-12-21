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
  name: string;

  text: string;

  constructor(name: string) {
    this.name = name;
    this.id = getId();
  }
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
