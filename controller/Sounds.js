class Sounds{

    static initialize(){
        Sounds.sounds = {
            button: new Audio("sounds/button.mp3"),
            error: new Audio("sounds/error.mp3"),
            success: new Audio("sounds/success.mp3")
        };
    }


}
window.addEventListener("load", Sounds.initialize);