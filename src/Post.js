export default class Post{
    title;
    date;
    img;
    constructor(title, img) {
        this.img = img;
        this.title = title;
        this.date = new Date();
    }
    toString(){
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            img: this.img
        })
    };
    get upperCaseTitle() {
        return this.title.toUpperCase();
    }
}