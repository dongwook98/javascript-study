/**
 * 변수 이름짓기
 *
 * 저장된 값을 잘 나타낼 수 있는 의미 있는 이름, 구체적일수록 좋음
 */

/**
 * 변수 규칙!
 *
 * 라틴문자(0-9, a-z, A-Z)
 * 대소문자를 구분함
 * 추천: camelCase (likeThis) ✅
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌ (_, $ 두가지는 예외)
 * 이모지 ❌
 * 여러개의 변수를 1, 2, 3 숫자로 구분 ❌ -> 최대한 의미있게, 구체적인 이름으로 작성!
 */

let apple;
let redApple; // 카멜케이스

// 나쁜예제 💩
let number = 20; // 의미가없음

// 좋은예제 ✨
let myAge = 20; // 나이라는 의미가 있음

// 나쁜예제 💩
let audio1; // 의미가 없음
let audio2; // 의미가 없음

// 좋은예제 ✨
let backgroundAudio; // 의미가 있음
let windAudio;

/**
 * 꿀팁! 🍯
 * 같은 성격의 데이터를 선언할때는
 * 틀이되는걸 먼저쓰고 구체적인걸 뒤로뺴자
 * 이렇게하면 나중에 변수를 사용할때 자동완성되어서 편함
 */
let audioBackground;
let audioWind;
