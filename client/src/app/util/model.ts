import {IdInterface, guid} from "../util/comon";


export class Content {
    name: string;
    pages: Page[];
}

export class Page {
  title: string;
  pageSegments: PageSegment[];
}

export class PageSegment implements IdInterface{
  id:string;
  name: string;

  constructor(name: string) {
    this.name = name;
    this.id = guid();
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
