const BMI_TABLE = {
  severeThinness: {
    result: 'Delgadez Severa',
    message: 'Deberías acudir a un nutricionista para ganar peso'
  },
  slightThinness: {
    result: 'Delgadez leve',
    message: 'Deberías acudir a un nutricionista para ganar peso'
  },
  thinness: {
    result: 'Delgadez',
    message: 'Te recomendamos que sigas una dieta para ganar un poco de peso'
  },
  healthyWeight: {
    result: 'Peso saludable',
    message: 'Estás en tu peso ideal, no olvides acompañarlo de ejercicio'
  },
  overweight: {
    result: 'Sobrepeso',
    message: 'Te recomendamos que sigas una dieta y ejercicio para bajar un poco de peso'
  },
  moderateObesity: {
    result: 'Obesidad moderada',
    message: 'Te recomendamos que sigas una dieta y ejercicio para bajar de peso'
  },
  severeObesity: {
    result: 'Obesidad severa',
    message: 'Deberías acudir a un nutricionista para bajar de peso y acompañarlo con ejercicio'
  },
  verySevereObesity: {
    result: 'Obesidad muy severa',
    message: 'Deberías acudir a un nutricionista para bajar de peso y acompañarlo con ejercicio'
  }
}

const getBarColor = (bmiValue) => {
  if (bmiValue < 16 || bmiValue >= 30) return '#FF637D';
  if (bmiValue > 16 && bmiValue < 18.6 || bmiValue > 25 && bmiValue < 30) return 'orange';
  if (bmiValue > 18.5 && bmiValue < 25) return '#7be382';
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
    ...getResult(bmiValue),
    barColor: getBarColor(bmiValue),
  }
}