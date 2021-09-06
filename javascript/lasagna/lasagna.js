const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * Determine the amount of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
const remainingMinutesInOven = actualMinutesInOven =>
  EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;

/**
 * Given a number of layers, determine the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
const preparationTimeInMinutes = numberOfLayers =>
  PREPARATION_MINUTES_PER_LAYER * numberOfLayers;

/**
 * Calculate the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
const totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) =>
  numberOfLayers * PREPARATION_MINUTES_PER_LAYER + actualMinutesInOven;

export {
  EXPECTED_MINUTES_IN_OVEN,
  remainingMinutesInOven,
  preparationTimeInMinutes,
  totalTimeInMinutes
};
