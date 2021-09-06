class Pig{
    constructor(){
        this.PigIsReady = true;
    }
    haveDinnerWithMe(){
        if(this.PigIsReady){
            console.log("I can give you a decent dinner!");
        }
    }
}
export default Pig;