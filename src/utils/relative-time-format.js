// 자바스크립을 활용하여 시간을 하루전, 어제 등등으로 표현

// 상대시간 함수
export function formatRelativeTime(targetTime) {
  const rtf = new Intl.RelativeTimeFormat('ko', {
    numeric: 'auto',
  });

  const currentTime = new Date();
  const timeDiffrernce = Math.abs(targetTime - currentTime);
  //초
  const seconds = Math.floor(timeDiffrernce / 1000);
  //분
  const minutes = Math.floor(seconds / 60);

  const hours = Math.floor(minutes / 60);

  const days = Math.floor(hours / 24);
  console.log('days : ', days);

  const years = Math.floor(days / 365);
  console.log('years : ', years);

  if (years > 0) {
    return rtf.format(-1 * years, 'year');
  } else if (days > 0) {
    return rtf.format(-1 * days, 'day');
  } else if (hours > 0) {
    return rtf.format(-1 * hours, 'hour');
  } else if (minutes > 0) {
    return rtf.format(-1 * minutes, 'minute');
  } else {
    return rtf.format(-1 * seconds, 'second');
  }

  return timeDiffrernce;
}
