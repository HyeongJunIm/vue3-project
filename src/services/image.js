// 파일 업로드 js

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from 'src/boot/firebase';
import { v4 as uuidv4 } from 'uuid';
import { readAndCompressImage } from 'browser-image-resizer';

export async function uploadImage(file) {
  const filename = `images/${uuidv4()}.${getExtension(file.name)}`;
  //참조 만들기
  const storageRef = ref(storage, filename);
  console.log('filename : ', filename);
  const thumnail = await compressImage(file);
  const uploadResult = await uploadBytes(storageRef, thumnail);
  const dowmloadURL = await getDownloadURL(uploadResult.ref);
  console.log('dowmloadURL : ', dowmloadURL);
  return dowmloadURL;
}

//확장자 생성
function getExtension(filename) {
  return filename.split('.').pop();
}

//이미지 압축하기
async function compressImage(file) {
  return readAndCompressImage(file, {
    quality: 0.8,
  });
}
