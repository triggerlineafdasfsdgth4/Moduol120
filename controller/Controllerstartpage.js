class Controllerstartpage {



    static initialize() {
        Controllerstartpage.instance = new Controllerstartpage();

    }


    constructor() {
    this.german = document.getElementById("deutsch");
    this.french = document.getElementById("français");
    this.english = document.getElementById("english");
    this.german.addEventListener("click", this.onClickLanguageChangeGermanSound.bind(this));
    this.french.addEventListener("click", this.onClickLanguageChangeFrenchSound.bind(this));
    this.english.addEventListener("click", this.onClickLanguageChangeEnglishSound.bind(this));

    this.Schwarzenburg = document.getElementsByClassName()


    }

    onClickLanguageChangeGermanSound(event){
        Controllerstartpage.playButtonSound();

        this.german.setAttribute("disable","true");
        this.french.setAttribute("disable", "false");
        this.english.setAttribute("disable", "false");
    }

    onClickLanguageChangeFrenchSound(event){
        Controllerstartpage.playButtonSound();

        this.french.setAttribute("disable", "true");
        this.english.setAttribute("disable", "false");
        this.german.setAttribute("disable","false");
    }

    onClickLanguageChangeEnglishSound(event){
        Controllerstartpage.playButtonSound();

        this.english.setAttribute("disable", "true");
        this.german.setAttribute("disable","false");
        this.french.setAttribute("disable", "false");
    }

    static sounds(name) {
        Sounds.sounds[name] = new Audio("Sounds/" + name + ".mp3");
        Sounds.sounds[name].play();
    }

    static playButtonSound() {
        Sounds.sounds("button");
    }

    static playErrorSound() {
        Sounds.sounds("error");
    }

    static playSuccessSound() {
        Sounds.sounds("success");
    }



}

new Controllerstartpage();

window.addEventListener("load", Controllerstartpage.initialize)