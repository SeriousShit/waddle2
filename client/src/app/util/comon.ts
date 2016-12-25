export interface IdInterface {
    id: string;
}

export function indexOfId(array: IdInterface[], id: string): number {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i].id === id) {
            // console.log(i);
            return i;
        }
    }
    // console.log(-1);
    return -1;
}

export function getId() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() +  s4() +  s4() +  s4() +  s4() + s4() + s4();
}
