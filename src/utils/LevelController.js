/* eslint-disable require-jsdoc */
const SizeLevels = {
  1: 0,
  2: 90000,
  3: 180000,
  4: 360000,
  5: 1800000,
  6: 3600000,
  7: 5400000,
  8: 7200000,
  9: 18000000,
  10: 36000000,
};

export class LevelController {
  constructor(count) {
    this.level = this.getCurrentLevel(count);
    if (this.level<10) {
      this.nextLevel = this.getNextLevel(this.level);
      this.rest = this.getRest(count, this.nextLevel);
      this.percent = this.calculatePercent(count, this.level, this.nextLevel);
    } else {
      this.level = 10;
      this.nextLevel = 'max';
      this.rest = 0;
      this.percent = 100;
    }
  }

  getCurrentLevel(count) {
    let result = 1;

    for (const key in SizeLevels) {
      if (count>=SizeLevels[key]) {
        result=key;
      }
    }
    return result;
  };

  getNextLevel(currentLevel) {
    return +currentLevel+1;
  }

  getRest(count, nextLevel) {
    return SizeLevels[nextLevel] - count;
  }

  calculatePercent(count, currentLevel, nextLevel) {
    return Math.trunc(
        (count - SizeLevels[currentLevel])/
        (SizeLevels[nextLevel] - SizeLevels[currentLevel])*
        100,
    );
  }
}
