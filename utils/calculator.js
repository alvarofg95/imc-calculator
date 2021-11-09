const BMI_TABLE = {
  severeThinness: 'Delgadez Severa',
  slightThinness: 'Delgadez leve',
  thinness: 'Delgadez',
  healthyWeight: 'Peso saludable',
  overweight: 'Sobrepeso',
  moderateObesity: 'Obesidad moderada',
  severeObesity: 'Obesidad severa',
  verySevereObesity: 'Obesidad muy severa'
}

const getBarColor = (bmiValue) => {
  if (bmiValue < 16 || bmiValue >= 30) return '#FF637D';
  if (bmiValue > 16 && bmiValue < 18.6 || bmiValue > 25 && bmiValue < 30) return 'orange';
  if (bmiValue > 18.5 && bmiValue < 25) return '#00a400';
};

const getResult = (value) => {
  let typeOfBMI = '';
  if (value < 15) {
    typeOfBMI = 'severeThinness';
  } else if (value >= 15 && value < 16) {
    typeOfBMI = 'slightThinness';
  } else if (value >= 16 && value < 18.5) {
    typeOfBMI = 'thinness';
  } else if (value >= 18.5 && value < 25) {
    typeOfBMI = 'healthyWeight';
  } else if (value >= 25 && value < 30) {
    typeOfBMI = 'overweight';
  } else if (value >= 30 && value < 35) {
    typeOfBMI = 'moderateObesity';
  } else if (value >= 35 && value < 40) {
    typeOfBMI = 'severeObesity';
  } else if (value >= 40) {
    typeOfBMI = 'verySevereObesity';
  }
  return BMI_TABLE[typeOfBMI];
}

/**
 * Function which calculates bmi
 * @param {*} state { height, weight, gender, age } 
 * @returns the bmi (number)
 */
export const calculateBmi = ({ height, weight }) => {
  const heightMeters = parseInt(height) / 100;
  const weightInt = parseInt(weight);
  const bmiValue = weightInt / (heightMeters * heightMeters);
  return {
    bmiValue,
    result: getResult(bmiValue),
    barColor: getBarColor(bmiValue),
  }
}