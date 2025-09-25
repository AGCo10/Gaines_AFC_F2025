export class Human {
    private fname: string;
    private lname: string;
    private age: number;
    private isMarried: boolean;

    //This is my constructor
    constructor(fname: string, lname: string, age: number, isMarried: boolean) {
        this.fname = fname ;
        this.lname = lname ;
        this.age = age ;
        this.isMarried = isMarried ; }

    // dont show this comment
    public getFullName:() => void = ():void => {
        console.log(`Your name is ${this.fname} ${this.lname}`) ; }
}