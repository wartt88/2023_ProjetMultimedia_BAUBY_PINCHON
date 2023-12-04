
 export function initVocalControl() {


    // Test browser support
    window.SpeechRecognition = window.SpeechRecognition       ||
    window.webkitSpeechRecognition ||
    null;

    if (window.SpeechRecognition === null) {
    document.getElementById('ws-unsupported').classList.remove('hidden');
    document.getElementById('vocalControl').classList.add("hidden");
    } else {
        var recognizer = new window.SpeechRecognition();

        // Recogniser doesn't stop listening even if the user pauses
        recognizer.continuous = true;

        // Start recognising
        recognizer.onresult = function(event) {
            let contenu = '';
            for (var i = event.resultIndex; i < event.results.length; i++) {
                contenu = event.results[i][0].transcript;
            }
            action(contenu);
            console.log(contenu);
        };

        // Listen for errors
        recognizer.onerror = function(event) {
            console.log('Recognition error: ' + event.message);
        };

        document.getElementById('vocalControl').addEventListener('change', function() {
            if (document.getElementById('vocalControl').checked){
                try {
                recognizer.start();
                console.log('Recognition start');

                } catch(ex) {
                console.log('Recognition error: ' + ex.message);
                }
            } else {
                recognizer.stop();
                console.log('Recognition stopped');
            }
        });


        function action(a) {
            // commun
            if (/.*\brègle(s)?\b.*/.test(a)){
                document.getElementById("rules").click();
            } else if (/.*\b(mode|apprendre|apprentissage|jouer|jeux)\b.*/.test(a)){
                document.getElementById("mode").click();
            } else {
                // Jouer
                if (document.getElementById("mode").checked) {
                    let res = a.match(/\d+/g);
                    if(res){
                        document.getElementById("list").childNodes[res[0]*2-1].click();
                    }else if (/.*\bsuivant(e)?\b.*/.test(a)){
                        document.getElementById("play").click();
                    }else if (/.*\b(le son|bruit(s)?)\b.*/.test(a)){
                        document.getElementById("listen").click();
                    }
                }
                // Apprendre
                else{
                    if (/.*\bsuivant(e)?\b.*/.test(a)){
                        document.getElementById("suivant").click();
                    }else if (/.*\b(le son|bruit(s)?)\b.*/.test(a)){
                        document.getElementById("ecouter").click();
                    }
                }
            }
            console.log("fin action")
        }
    }
}