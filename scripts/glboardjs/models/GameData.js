export default class GameData {
  constructor(
    custom_report,
    number_phases,
    date_last_login,
    phases = [],
    phases_unlocked,
    player_minutes_in_game
  ) {
    this.custom_report = custom_report;
    this.number_phases = number_phases;
    this.date_last_login = date_last_login;
    this.phases = phases;
    this.phases_unlocked = phases_unlocked;
    this.player_minutes_in_game = player_minutes_in_game;
  }
}
