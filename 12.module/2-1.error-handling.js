// 경로를 받아와서 파일의 내용을 읽어주는 함수
function readFile(path) {
  if (!path) {
    throw new Error('파일 경로를 찾을 수 없음'); // 에러를 던지면 밑에코드는 실행되지 않고 앱이 죽음
  }

  return '동욱의 일기 ~~~';
}

/**
 *
 * @param {*} path 파일 경로
 * @returns content에 '글쓴이 :동욱'을 붙여줌
 */
function processFile(path) {
  let content;

  try {
    content = readFile(path);
  } catch (error) {
    console.log('에러 발생!');
    console.log(error);
    content = '기본 내용';
  } finally {
    console.log('성공하든 실패하든 마지막으로 리소스 정리 가능 🧹');
  }
  const result = `✍️  글쓴이: 동욱
  
${content}`;
  return result;
}

console.log(processFile());
