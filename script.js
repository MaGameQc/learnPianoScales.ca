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
        c3 : document.querySelector("#c3"),
        cs3 : document.querySelector("#cs3"),
        d3 : document.querySelector("#d3"),
        ds3 : document.querySelector("#ds3"),
        e3 : document.querySelector("#e3"),
        f3 : document.querySelector("#f3"),
        fs3 : document.querySelector("#fs3"),
        g3 : document.querySelector("#g3"),
        gs3 : document.querySelector("#gs3"),
        a3 : document.querySelector("#a3"),
        as3 : document.querySelector("#as3"),
        b3 : document.querySelector("#b3"),
        c4 : document.querySelector("#c4"),
        cs4 : document.querySelector("#cs4"),
        d4 : document.querySelector("#d4"),
        ds4 : document.querySelector("#ds4"),
        e4 : document.querySelector("#e4"),
        f4 : document.querySelector("#f4"),
        fs4 : document.querySelector("#fs4"),
        g4 : document.querySelector("#g4"),
        gs4 : document.querySelector("#gs4"),
        a4 : document.querySelector("#a4"),
        as4 : document.querySelector("#as4"),
        b4 : document.querySelector("#b4"),
        c5 : document.querySelector("#c5"),

    },

    notesToPlay : [],

        controller : {
            keyboard:{
                q : {note : "c3", pressed : false, el : document.querySelector("#c3").style},
                2 : {note : "c#3", pressed : false, el : document.querySelector("#cs3").style},
                w : {note : "d3", pressed : false, el : document.querySelector("#d3").style},
                3 : {note : "d#3", pressed : false, el : document.querySelector("#ds3").style},
                e : {note : "e3", pressed : false, el : document.querySelector("#e3").style},
                r : {note : "f3", pressed : false, el : document.querySelector("#f3").style},
                5 : {note : "f#3", pressed : false, el : document.querySelector("#fs3").style},
                t : {note : "g3",  pressed : false, el : document.querySelector("#g3").style},
                6 : {note : "g#3",  pressed : false, el : document.querySelector("#gs3").style},
                y : {note : "a3", pressed : false, el : document.querySelector("#a3").style},
                7 : {note : "a#3",  pressed : false, el : document.querySelector("#as3").style},
                u : {note : "b3", pressed : false, el : document.querySelector("#b3").style},
                i : {note : "c4", pressed : false, el : document.querySelector("#c4").style},
                9 : {note : "c#4", pressed : false, el : document.querySelector("#cs4").style},
                o : {note : "d4", pressed : false, el : document.querySelector("#d4").style},
                0 : {note : "d#4", pressed : false, el : document.querySelector("#ds4").style},
            },

            midiKeyboard:{
                60 : {note : "c3", pressed : false, el : document.querySelector("#c3").style},
                61 : {note : "c#3", pressed : false, el : document.querySelector("#cs3").style},
                62 : {note : "d3", pressed : false, el : document.querySelector("#d3").style},
                63 : {note : "d#3", pressed : false, el : document.querySelector("#ds3").style},
                64 : {note : "e3", pressed : false, el : document.querySelector("#e3").style},
                65 : {note : "f3", pressed : false, el : document.querySelector("#f3").style},
                66 : {note : "f#3", pressed : false, el : document.querySelector("#fs3").style},
                67 : {note : "g3",  pressed : false, el : document.querySelector("#g3").style},
                68 : {note : "g#3",  pressed : false, el : document.querySelector("#gs3").style},
                69 : {note : "a3", pressed : false, el : document.querySelector("#a3").style},
                70 : {note : "a#3",  pressed : false, el : document.querySelector("#as3").style},
                71 : {note : "b3", pressed : false, el : document.querySelector("#b3").style},
                72 : {note : "c4", pressed : false, el : document.querySelector("#c4").style},
                73 : {note : "c#4", pressed : false, el : document.querySelector("#cs4").style},
                74 : {note : "d4", pressed : false, el : document.querySelector("#d4").style},
                75 : {note : "d#4", pressed : false, el : document.querySelector("#ds4").style},
            },
        },




    notesArray : [], 

    initialiseElementsSelector : function(){
        // const shitty = new this.controller.notesConstructor("q");
        // console.log(shitty.build());
        let entries = Object.entries(piano.notes);
        let keys = Object.keys(piano.notes);
        let values = Object.values(piano.notes);
        values.forEach(element => {
            element.addEventListener("mousedown", async() =>{
                let id = element.id
                console.log(id + " ___ down");
                if(id.includes("s")){
                    id = id.replace("s", "#");
                }
                piano.synth.triggerAttack([id]);

            });

            element.addEventListener("mouseup", async() =>{
                let id = element.id
                if(id.includes("s")){
                    id = id.replace("s", "#");
                }
                piano.synth.triggerRelease([id]);

            });

            element.addEventListener("mouseleave", async() =>{
                let id = element.id
                if(id.includes("s")){
                    id = id.replace("s", "#");
                }
                piano.synth.triggerRelease([id]);
            });
        });
    },

    pcKeyboard :{
        addListeners : function(){
            window.addEventListener("keydown", function(event){
                console.log("down");
                let key = event.key;
                let noteToPlay = piano.controller.keyboard[key].note;
                if(piano.controller.keyboard[key].pressed == true){
                    return
                }else{
                playNotes(noteToPlay);
                piano.controller.keyboard[key].el.backgroundColor = "grey";
                }
                piano.controller.keyboard[key].pressed = true;
    
            });
    
            
            window.addEventListener("keyup", function(event){
                let key = event.key;
                noteToEnd = piano.controller.keyboard[key].note;
                piano.controller.keyboard[key].pressed = false;
                stopNotes(noteToEnd);
            });
    
            playNotes = (note) =>{
                piano.synth.triggerAttack(note);
            }
    
            stopNotes = (note) =>{
                piano.synth.triggerRelease(note);
    
            }
        },
    },



    midiKeyboard:{
        resquestMidi : () =>{
            if (navigator.requestMIDIAccess) {
                navigator.requestMIDIAccess()
                    .then((success) => {
                        let MidiAccessObject = success;
                        piano.midiKeyboard.success(MidiAccessObject);
                    }, (failure) =>{
                        console.error('No access to your midi devices.')
                    });
            }
        },
    
        success : (MidiAccessObject) =>{
            var inputs = MidiAccessObject.inputs.values();
            // inputs is an Iterator
     
            for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
                // What this for loop is saying is:
                // Create a variable called input and assign the next input to it. Because we've not iterated over any inputs yet, 
                // this will return the first of our inputs.
                // If we have an input and the input iterator's done value doesn't equal true, then carry on with the loop.
                // Set input to the next input in our iterator object.
                input.value.onmidimessage = piano.midiKeyboard.onMIDIMessage;
            }
        },
    
        onMIDIMessage : (message) => {
    
            console.log(message.data[1]);
            let midiNotePressed = message.data[1];
            let pressedOrReleased = message.data[0];
            let isPressed = false;
            console.log(pressedOrReleased);
            if(pressedOrReleased == 144){
                isPressed = true;
                console.log(isPressed);
                console.log(piano.controller.midiKeyboard[midiNotePressed]);
                piano.synth.triggerAttack(piano.controller.midiKeyboard[midiNotePressed].note);
                piano.controller.midiKeyboard[midiNotePressed].el.boxShadow = "2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2)";
                piano.controller.midiKeyboard[midiNotePressed].el.background = "linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)";
                piano.controller.midiKeyboard[midiNotePressed].el.border = "0.5rem solid black";

            }
            if(pressedOrReleased == 128){
                isPressed = false;
                console.log(isPressed);
                piano.synth.triggerRelease(piano.controller.midiKeyboard[midiNotePressed].note);
                piano.controller.midiKeyboard[midiNotePressed].el.backgroundColor = "white";
                piano.controller.midiKeyboard[midiNotePressed].el.boxShadow = "inset 0 0 0.5rem rgba(0,0,0,0.2)";
                piano.controller.midiKeyboard[midiNotePressed].el.background = "linear-gradient(to bottom,#eee 0%,#fff 100%)";
                piano.controller.midiKeyboard[midiNotePressed].el.border = "1px solid black";
            }
        },
    
    },
};

piano.initialiseElementsSelector();
piano.pcKeyboard.addListeners();
piano.midiKeyboard.resquestMidi();


// let entries = Object.values(piano.notes);
// console.log(entries);

// Midi ={

//     // midiKeyController : {
//     //     60 : {note : "c3", pressed : false, el : document.querySelector("#c4").style},
//     //     61 : {note : "c#3", pressed : false, el : document.querySelector("#cs4").style},
//     //     62 : {note : "d3", pressed : false, el : document.querySelector("#d4").style},
//     //     63 : {note : "d#3", pressed : false, el : document.querySelector("#ds4").style},
//     //     64 : {note : "e3", pressed : false, el : document.querySelector("#e4").style},
//     //     65 : {note : "f3", pressed : false, el : document.querySelector("#f4").style},
//     //     66 : {note : "f#3", pressed : false, el : document.querySelector("#fs4").style},
//     //     67 : {note : "g3",  pressed : false, el : document.querySelector("#g4").style},
//     //     68 : {note : "g#3",  pressed : false, el : document.querySelector("#gs4").style},
//     //     69 : {note : "a3", pressed : false, el : document.querySelector("#a4").style},
//     //     70 : {note : "a#3",  pressed : false, el : document.querySelector("#as4").style},
//     //     71 : {note : "b3", pressed : false, el : document.querySelector("#b4").style},
//     //     72 : {note : "c4", pressed : false, el : document.querySelector("#c5").style},
//     //     73 : {note : "c#4", pressed : false, el : document.querySelector("#cs5").style},
//     //     74 : {note : "d4", pressed : false, el : document.querySelector("#d5").style},
//     //     75 : {note : "d#4", pressed : false, el : document.querySelector("#ds5").style},
//     // },

//     resquestMidi : () =>{
//         if (navigator.requestMIDIAccess) {
//             navigator.requestMIDIAccess()
//                 .then((success) => {
//                     let MidiAccessObject = success;
//                     Midi.success(MidiAccessObject);
//                 }, (failure) =>{
//                     console.error('No access to your midi devices.')
//                 });
//         }
//     },

//     success : (MidiAccessObject) =>{
//         var inputs = MidiAccessObject.inputs.values();
//         // inputs is an Iterator
 
//         for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
//             // What this for loop is saying is:
//             // Create a variable called input and assign the next input to it. Because we've not iterated over any inputs yet, 
//             // this will return the first of our inputs.
//             // If we have an input and the input iterator's done value doesn't equal true, then carry on with the loop.
//             // Set input to the next input in our iterator object.
//             input.value.onmidimessage = Midi.onMIDIMessage;
//         }
//     },

//     onMIDIMessage : (message) => {

//         console.log(message.data[1]);
//         let midiNotePressed = message.data[1];
//         let pressedOrReleased = message.data[0];
//         let isPressed = false;
//         console.log(pressedOrReleased);
//         if(pressedOrReleased == 144){
//             isPressed = true;
//             console.log(isPressed);
//             console.log(Midi.midiKeyController[midiNotePressed]);
//             piano.synth.triggerAttack(Midi.midiKeyController[midiNotePressed].note);
//         }
//         if(pressedOrReleased == 128){
//             isPressed = false;
//             console.log(isPressed);
//             piano.synth.triggerRelease(Midi.midiKeyController[midiNotePressed].note);

//         }
//     },



// }



 
// function success (midi) {
//     var inputs = midi.inputs.values();
//     // inputs is an Iterator
 
//     for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
//         // What this for loop is saying is:
//         // Create a variable called input and assign the next input to it. Because we've not iterated over any inputs yet, 
//         // this will return the first of our inputs.
//         // If we have an input and the input iterator's done value doesn't equal true, then carry on with the loop.
//         // Set input to the next input in our iterator object.
//         input.value.onmidimessage = onMIDIMessage;
//     }
// }
 
// function failure () {
//     console.error('No access to your midi devices.')
// }
 
// function onMIDIMessage (message) {

//     console.log(message.data[1]);
//     let midiNotePressed = message.data[1];
//     let pressedOrReleased = message.data[0];
//     let isPressed = false;
//     console.log(pressedOrReleased);
//     if(pressedOrReleased == 144){
//         isPressed = true;
//         console.log(isPressed);
//     }
//     if(pressedOrReleased == 128){
//         isPressed = false;
//         console.log(isPressed);
//     }


 
    // if (message.data[0] === 144 && message.data[2] > 0) {
    //     console.log("hey");
    // }
 
    // if (message.data[0] === 128 || message.data[2] === 0) {
    //     console.log("wow");
    // }
// }

// var inputs = midi.inputs.values();
// console.log(inputs);


