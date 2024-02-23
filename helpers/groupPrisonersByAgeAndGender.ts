import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru_RU');

import { Prisoner } from '@/apollo/generated';

export function groupPrisonersByAgeAndGender(
  prisoners: Prisoner['prisonerData'][],
) {
  const ageGroups = [
    { minAge: 15, maxAge: 19, label: '15–19' },
    { minAge: 20, maxAge: 24, label: '20-24' },
    { minAge: 25, maxAge: 29, label: '25-29' },
    { minAge: 30, maxAge: 34, label: '30-34' },
    { minAge: 35, maxAge: 39, label: '35-39' },
    { minAge: 40, maxAge: 49, label: '40-49' },
    { minAge: 50, maxAge: 59, label: '50-59' },
    { minAge: 60, maxAge: 69, label: '60-69' },
    { minAge: 70, maxAge: 79, label: '70-79' },
    { minAge: 80, maxAge: 89, label: '80-89' },
    { minAge: 90, maxAge: 99, label: '90-99' },
  ];

  const groupedData = ageGroups.map((group) => {
    const { minAge, maxAge, label } = group;

    const maleCount = prisoners.filter((p) => {
      const birthday = moment(p?.birthdate ?? '');

      return (
        parseInt(birthday?.fromNow()) >= minAge &&
        parseInt(birthday?.fromNow()) <= maxAge &&
        p?.sex === 'мужской'
      );
    }).length;

    const femaleCount = prisoners.filter((p) => {
      const birthday = moment(p?.birthdate ?? '');

      return (
        parseInt(birthday?.fromNow()) >= minAge &&
        parseInt(birthday?.fromNow()) <= maxAge &&
        p?.sex === 'женский'
      );
    }).length;

    return {
      label,
      age: minAge,
      male: maleCount,
      female: femaleCount,
    };
  });

  return groupedData;
}
