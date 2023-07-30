import GLBoard from "./GLBoard.js";
import DateHelper from "./utils/DateHelper.js";
import { GENDER } from "./utils/StructsCommon.js";

const urlParams = new URLSearchParams(window.location.search);
const playerName = urlParams.get("name");

// Credenciais do GLBoard - Temporariamente comentado para teste
// window.gl = new GLBoard("_25QFu6_u34tDLpx2Sv-JA", playerName);
window.gl = new GLBoard("45X1SnmfszX-DM0Ezj-XtQ", playerName ?? "guest" + Math.random().toString().split(".")[1]);
await gl.LOAD_USER_DATA( function(){
   
    var src = "scripts/mygame.js";
    var s = document.createElement( 'script' );
    
    s.setAttribute( 'src', src );
    document.body.appendChild( s );

});

if (gl.data.player_data.id === undefined) {
    const birthday = urlParams.get("birthday");
    const gender = urlParams.get("gender");
    const dateBirthday = birthday ?? "01/01/2023";
    
    gl.setPlayerData(
        gl.USER_ID,
        dateBirthday + " 00:00:00",
        gender ?? "OUTROS"
    );
}

// setTimeout(() => {
// console.log(gl.getPhasesUnlockedPlayer());
// console.log(gl.getLastLogin());
// const date = new Date();
// console.log(date);
// console.log(DateHelper.dateToString(date));
// console.log(DateHelper.dateToString(gl.getLastLogin()));
// gl.setCustomReport("Jogador tem um rendimento esperado");
// gl.SEND_USER_DATA();
// }, 2000);

// ************** TESTE GET'S *********************
// console.log("Dados do Player:", gl.getPlayerData());
// console.log("Dados do Game:", gl.getGameData());
// console.log("Quantidade de Fases:", gl.getQuantPhasesGame());
// console.log("Último login:", gl.getLastLogin());
// console.log("Custom Report:", gl.getCustomReport());
// console.log("Fases Desbloqueadas:", gl.getPhasesUnlockedPlayer());
// console.log("Minutos em jogo:", gl.getPlayerMinutesGame());
// console.log("Fases do jogo:", gl.getPhasesGame());
// console.log("Fase 1:", gl.getPhaseGame("fase1"));

// ************** TESTE SET'S *********************
// PLAYER DATA
// gl.setPlayerData("João", "20/03/04", GENDER.MASCULINO);
// console.log(gl.getPlayerData());

// GAME DATA

// QUANT PHASES
// gl.setQuantPhasesGame(10);
// console.log(gl.getQuantPhasesGame());

// LAST LOGIN
// gl.setLastLogin(new Date());
// console.log(gl.getLastLogin());

// CUSTOM REPORT
// gl.setCustomReport("Jogador possui um bom desempenho");
// console.log(gl.getCustomReport());

// PLAYER MINUTES IN GAME
// gl.setPlayerMinutesGame(15);
// console.log(gl.getPlayerMinutesGame());

// ADD PHASE IN GAME
// gl.addPhaseGame("fase3");
// console.log(gl.getPhasesGame());

// ADD SECTION
// gl.addSectionInPhase("fase4", "VITORIA", 10, new Date(), new Date());
// console.log(gl.getPhasesGame());
// console.log(gl.getPhaseGame("fase4"));

// DELETE PHASE
// gl.deletePhaseGame("fase4");

// gl.SEND_USER_DATA();
