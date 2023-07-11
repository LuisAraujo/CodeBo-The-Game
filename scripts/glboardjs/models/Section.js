export default class Section {
  constructor(
    conclusion,
    dateTimeStart,
    dateTimeFinish,
    finalized_challenges,
    path_player,
    performance,
    route_image_b64
  ) {
    this.conclusion = conclusion;
    this.dateTimeStart = dateTimeStart;
    this.dateTimeFinish = dateTimeFinish;
    this.finalized_challenges = finalized_challenges;
    this.path_player = path_player;
    this.performance = performance;
    this.route_image_b64 = route_image_b64;
  }
}
