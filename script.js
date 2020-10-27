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

    synth: new Tone.PolySynth().toDestination(),

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

    notesToPlay : [],

    notesList : {
            "q" : "c3",
            "2" : "c#3",
            "w" : "d3",
            "3" : "d#3",
            "e" : "e3",
            "r" : "f3",
            "5" : "f#3",
            "t" : "g3", 
            "6" : "g#3", 
            "y" : "a3",
            "7" : "a#3", 
            "u" : "b3",
            "i" : "c4", 
            "9" : "c#4",
            "o" : "d4", 
            "0" : "d#4",
        },



    notesArray : [], 

    initialiseElementsSelector : function(){
        let entries = Object.entries(piano.notes);
        let keys = Object.keys(piano.notes);
        let values = Object.values(piano.notes);
        values.forEach(element => {

            element.addEventListener("mousedown", async() =>{
                let id = element.id
                if(id.includes("s")){
                    id = id.replace("s", "#");
                }
                piano.synth.set({ detune: -1200 });
                piano.synth.triggerAttack([id]);
                // console.log(piano.synth);

            });

            element.addEventListener("mouseup", async() =>{
                let id = element.id
                if(id.includes("s")){
                    id = id.replace("s", "#");
                }
                piano.synth.set({ detune: -1200 });
                piano.synth.triggerRelease([id]);
                // console.log(piano.synth);

            });

            element.addEventListener("mouseleave", async() =>{
                let id = element.id
                if(id.includes("s")){
                    id = id.replace("s", "#");
                }
                piano.synth.set({ detune: -1200 });
                piano.synth.triggerRelease([id]);
                // console.log(piano.synth);

            });
        });
    },

    addkeyBoardListeners : function(){
        window.addEventListener("keydown", function(event){
            let key = event.key;
            if(piano.notesToPlay.includes(piano.notesList[key])){
                console.log("   already there");
                return
            }else{
                piano.notesToPlay.push(piano.notesList[key]);
                piano.synth.triggerAttack(piano.notesToPlay);
            }

            this.addEventListener("keyup", function(e){
                console.log(piano.notesToPlay);

                let spliced;
                let noteToGetRidOf = piano.notesList[key];
                console.log(noteToGetRidOf);
                piano.notesToPlay = [];
                piano.synth.triggerRelease(noteToGetRidOf);
            });
        });

    },
};

piano.initialiseElementsSelector();
piano.addkeyBoardListeners();

// let entries = Object.values(piano.notes);
// console.log(entries);