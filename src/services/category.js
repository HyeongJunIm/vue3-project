//api를 통해서 외부 내부에서 사용할 js를 모듈화 하기위한  파일, 데이터와 연계하여 사용하기위해선 모듈화가 편하다
const categories = [
  { label: 'Q&A', value: 'qna' },
  { label: '커뮤니티', value: 'community' },
  { label: '공지사항', value: 'notice' },
  { label: '강의', value: 'lecture' },
];

export function getCategories() {
  return categories;
}
