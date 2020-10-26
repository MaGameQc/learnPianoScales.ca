// //create a synth and connect it to the main output (your speakers)
// const synth = new Tone.Synth().toDestination();

// //play a middle 'C' for the duration of an 8th note

// const synth = new Tone.PolySynth().toDestination();
// set the attributes across all the voices using 'set'
// synth.set({ detune: -1200 });
// play a chord

const btn = document.querySelector(".c1");
const test = document.querySelector(".cs1");

// btn.addEventListener("mousedown", async() => {
//     synth.triggerAttack(["C4", "E4", "A4"]);
//     const now = Tone.now();
//     console.log(now);

// });


// btn.addEventListener("mouseup", async() => {
//     synth.triggerRelease(["C4", "E4", "A4"]);
//     const now = Tone.now();
//     console.log(now);

// });



const piano = {

    notes : {
        c1 : document.querySelector("#c4"),
        cs1 : document.querySelector("#cs4"),
        d1 : document.querySelector("#d4"),
        ds1 : document.querySelector("#ds4"),
        e1 : document.querySelector("#e4"),
        f1 : document.querySelector("#f4"),
        fs1 : document.querySelector("#fs4"),
        g1 : document.querySelector("#g4"),
        gs1 : document.querySelector("#gs4"),
        a1 : document.querySelector("#a4"),
        as1 : document.querySelector("#as4"),
        b1 : document.querySelector("#b4"),
        c2 : document.querySelector("#c5"),
    },

    keyboardBtnToListen : ["q", "2", "w", "3", "e", "r", "5", "t", "6", "y", "7", "u", "i", "9", "o", "0"],

    synth: new Tone.PolySynth().toDestination(),


    notesArray : [], 


    addListeners : function(){
        // this.notesArray.forEach(function(element){
        //     console.log(element);
        // });

    },

    initialiseElementsSelector : function(){
        let entries = Object.entries(piano.notes);
        let keys = Object.keys(piano.notes);
        let values = Object.values(piano.notes);
        values.forEach(element => {
            // element.addEventListener("mousedown", function(){
                
            // });
            // element.addEventListener("mouseup", function(){
                
            // });
            element.addEventListener("mousedown", async() =>{
                let id = element.id
                if(id.includes("s")){
                    id = id.replace("s", "#");
                }
                piano.synth.set({ detune: -1200 });
                piano.synth.triggerAttack([id]);
                console.log(piano.synth);

            });

            element.addEventListener("mouseup", async() =>{
                let id = element.id
                if(id.includes("s")){
                    id = id.replace("s", "#");
                }
                piano.synth.set({ detune: -1200 });
                piano.synth.triggerRelease([id]);
                console.log(piano.synth);

            });

            element.addEventListener("mouseleave", async() =>{
                let id = element.id
                if(id.includes("s")){
                    id = id.replace("s", "#");
                }
                piano.synth.set({ detune: -1200 });
                piano.synth.triggerRelease([id]);
                console.log(piano.synth);

            });
        });
    },

    addkeyBoardListeners : function(){
        let down = false;
        this.keyboardBtnToListen.forEach(function(element){
            document.addEventListener("keypress", function(event){
                // console.log(event.key);
                switch (event.key){
                    case "q":
                        if(down){
                            return
                        }
                        down = true;
                        console.log(event.key);
                        piano.synth.triggerAttack(["c4"]);
                        break
                    default:
                        console.log("default");
                }
            });

                document.addEventListener("keyup", function(event){
                    // console.log(event.key);
                    switch (event.key){
                        case "q":

                            down = false;
                            console.log(event.key);
                            piano.synth.triggerRelease(["c4"]);
                            break
                        default:
                            console.log("default");
                    }
            });
        });
    },
};

piano.addListeners();
piano.initialiseElementsSelector();
piano.addkeyBoardListeners();

// let entries = Object.values(piano.notes);
// console.log(entries);