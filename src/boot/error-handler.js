import { boot } from 'quasar/wrappers';
import { Notify } from 'quasar';
import { getErrorMessage } from 'src/utils/firebase/error-message';

export default boot(async ({ app }) => {
  //app.error.handler
  // 오류를 전역적으로 해결하기 위한 방법 터미널 quasar에서 quasar new boot error-handler 파일 생성
  app.config.errorHandler = (err, instance, info) => {
    console.log('### app.config.handler ###');
    console.log('err : ', err);
    console.log('instance : ', instance);
    console.log('info : ', info);
    Notify.create(getErrorMessage(err.code));
  };
});
