import GameData from "./models/GameData.js";
import PlayerData from "./models/PlayerData.js";
import TemplateGLBoard from "./models/TemplateGLBoard.js";
import CommonCode from "./utils/CommonCode.js";
import Phase from "./models/Phase.js";
//import InternetConnection from "./utils/internetConnection.js";
import { GENDER, STATUS_PHASE, STATUS_SECTION } from "./utils/StructsCommon.js";
import Section from "./models/section.js";
import DateHelper from "./utils/DateHelper.js";

// export { CommonCode } from "./utils/CommonCode.js";
// export { TemplateGLBoard } from "./models/TemplateGLBoard.js";

export default class GLBoard {
  data = new TemplateGLBoard();

  constructor(game_id, userId) {
    this._game_id = game_id;
    this._userId = userId;
  }

  get GAME_ID() {
    return this._game_id;
  }

  get USER_ID() {
    return this._userId;
  }

  /**
   * Carrega os dados do usuário
   */
  async LOAD_USER_DATA(callback) {
    //callback();

   // const connection = await InternetConnection.checkConnection();
    // if (!connection) {
    //   throw new Error(
    //     "Não foi possível carregar os dados do usuário pois não há conexão com a internet!"
    //   );
    // }

    try {
      const url =
        CommonCode.API_HOST + "data-user/" + this.GAME_ID + "/" + this.USER_ID;
      // https://viacep.com.br/ws/44006052/json/
      // const url = "http://localhost:3000/glboard";
      const result = await CommonCode.Get(url);
      // console.log(result);
      if (result == null) {
        console.log(
          "Esse usuário ainda não possui registros! Adicione informações."
        );
      } else {
        callback();
        //console.log(result);
        this.data.game_data = result.game_data;
        this.data.player_data = result.player_data;
      
        // console.log(JSON.parse(result));
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Envia os dados do usuário para o banco
   */
  async SEND_USER_DATA() {
    //const connection = await InternetConnection.checkConnection();
    // const url = "http://localhost:3000/glboard";
    // if (!connection) {
    //   throw new Error(
    //     "Não foi possível carregar os dados do usuário pois não há conexão com a internet!"
    //   );
    // }

    try {
      const url =
        CommonCode.API_HOST + "data-user/" + this.GAME_ID + "/" + this.USER_ID;
      const result = await CommonCode.Post(url, this.data);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Atribui os dados de perfil do usuário
   *
   * @param   {String} name   Nome do usuário
   * @param   {String} day_birthday   Data de nascimento do usuário
   * @param   {String} [gender]    Gênero do usuário
   */
  setPlayerData(name, day_birthday, gender = GENDER.OUTROS) {
    this.data.player_data.name = name;
    this.data.player_data.id = this.USER_ID;
    this.data.player_data.gender = gender;
    this.data.player_data.day_birthday = day_birthday;
  }

  /**
   * Retorna os dados de perfil do usuário
   *
   * @returns {PlayerData}
   */
  getPlayerData() {
    return this.data.player_data;
  }

  /**
   * Atribui os dados do game, recebendo um objeto GameData
   *
   * @param   {GameData} data   GameData
   */
  setGameData(data) {
    this.data.game_data = data;
  }

  /**
   * Retorna os dados de GameData do usuário
   *
   * @returns {GameData}
   */
  getGameData() {
    return this.data.game_data;
  }

  /**
   * Atribui o número de fases do jogo
   *
   * @param   {Int} quantPhases Quantidade de fases
   */
  setQuantPhasesGame(quantPhases) {
    this.data.game_data.number_phases = quantPhases;
  }

  /**
   * Retorna o número de fases do jogo
   *
   * @returns {Int}
   */
  getQuantPhasesGame() {
    return this.data.game_data.number_phases;
  }

  /**
   * Define o horário do ultimo login do jogador
   *
   * @param   {Date} date Data
   */
  setLastLogin(date) {
    this.data.game_data.date_last_login = DateHelper.dateToString(date);
  }

  /**
   * Retorna o horário do ultimo login do jogador
   *
   * @returns {Date}
   */
  getLastLogin() {
    return new Date(this.data.game_data.date_last_login);
  }

  /**
   * Define o report customizado relacionado ao usuário
   *
   * @param   {String} customReport
   */
  setCustomReport(customReport) {
    this.data.game_data.custom_report = customReport;
  }

  /**
   * Retorna o report customizado relacionado ao usuário
   *
   * @returns {String}
   */
  getCustomReport() {
    return this.data.game_data.custom_report;
  }

  /**
   * Retorna a quantidade de fases que o jogador desbloqueou
   *
   * @returns {Int}
   */
  getPhasesUnlockedPlayer() {
    return this.data.game_data.phases_unlocked;
  }

  /**
   * Define o tempo de jogo de um jogador
   *
   * @param   {Int} quant
   */
  setPlayerMinutesGame(quant) {
    this.data.game_data.player_minutes_in_game = quant;
  }

  /**
   * Retorna o tempo de jogo de um jogador
   *
   * @returns {Int}
   */
  getPlayerMinutesGame() {
    return this.data.game_data.player_minutes_in_game;
  }

  /**
   * Define a lista de fases do jogo
   *
   * @param   {Array} phases
   */
  setPhasesGame(phases) {
    this.data.game_data.phases = phases;
  }

  /**
   * Retorna a lista de fases do jogo
   *
   * @returns {Array}
   */
  getPhasesGame() {
    return this.data.game_data.phases;
  }

  /**
   * Adiciona uma nova fase ao jogo
   *
   * @throws  {Error} Caso o número de fases exceda o
   * número de fases informado em setQuantPhasesGame
   *
   * @param   {String} phase_id   Id da fase
   */
  addPhaseGame(phase_id) {
    if (
      this.data.game_data.phases_unlocked + 1 <=
      this.data.game_data.number_phases
    ) {
      const phase = new Phase(phase_id, Array(), STATUS_PHASE.NAO_FINALIZADA);
      this.data.game_data.phases.push(phase);
    } else {
      throw new Error("Número de fases excede o número de fases informado");
    }
  }

  /**
   * Função interna que busca o index de uma
   * fase do jogo
   *
   * @param   {String} phase_id   Id da fase
   *
   * @returns {Int}
   */
  #findPhaseIndex(phase_id) {
    return this.data.game_data.phases.findIndex(
      (phase) => phase.phase_id == phase_id
    );
  }

  /**
   * Deleta uma fase e todas as suas informacoes
   *
   * @throws  {Error} Caso o phase_id informado não
   * pertença a nenhuma fase
   *
   * @param   {String} phase_id   Id da fase
   */
  deletePhaseGame(phase_id) {
    const phaseIndex = this.#findPhaseIndex(phase_id);

    if (phaseIndex === -1) {
      throw new Error("Phase ID não encontrado na lista de fases");
    } else {
      this.data.game_data.phases.splice(phaseIndex, 1);
    }
  }

  #isValidPhase(phase_id) {
    const phaseIndex = this.#findPhaseIndex(phase_id);

    return !(phaseIndex === -1);
  }

  getPhaseGame(phase_id) {
    const phaseIndex = this.#findPhaseIndex(phase_id);

    if (phaseIndex === -1) {
      throw new Error("Phase ID não encontrado na lista de fases");
    } else {
      return this.data.game_data.phases[phaseIndex];
    }
  }

  /**
   * Define a lista de fases do jogo
   *
   * @param   {String} phase_id
   * @param   {String} conclusion
   * @param   {Int} performance
   * @param   {Date} dateTimeStartSection
   * @param   {Date} dateTimeFinishSection
   * @param   {Array} finalized_challenges
   * @param   {Array} path_player
   * @param   {String} route_image_b64
   */
  addSectionInPhase(
    phase_id,
    conclusion,
    performance,
    dateTimeStartSection,
    dateTimeFinishSection,
    finalized_challenges = null,
    path_player = null,
    route_image_b64 = null
  ) {
    const section = new Section();
    section.conclusion = conclusion;
    section.performance = performance;
    section.dateTimeStart = DateHelper.dateToString(dateTimeStartSection);
    section.dateTimeFinish = DateHelper.dateToString(dateTimeFinishSection);
    section.finalized_challenges =
      finalized_challenges == null ? Array() : finalized_challenges;
    section.path_player = path_player;
    section.route_image_b64 = route_image_b64;

    if (!this.#isValidPhase(phase_id)) {
      throw new Error("Phase ID fornecido é inválido");
    }

    const phaseIndex = this.#findPhaseIndex(phase_id);

    if (section.conclusion == STATUS_SECTION.VITORIA) {
      this.data.game_data.phases[phaseIndex].status = STATUS_PHASE.FINALIZADA;
      this.data.game_data.phases_unlocked++;
    }

    this.data.game_data.phases[phaseIndex].sections.push(section);
  }
}
