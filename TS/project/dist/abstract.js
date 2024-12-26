"use strict";
class Photo {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getFilter() {
        return 1;
    }
}
class Insta extends Photo {
    constructor(cameraMode, filter, time) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.time = time;
    }
    getSepia() {
        console.log("Sepia");
    }
}
