import { useCallback } from 'react';

export const App = () => {
  const onClick = useCallback(
    () => (e) => {
      console.log(e.target);
    },
    []
  );

  return (
    <div onClick={onClick()}></div> // ❌ 고차함수일 경우 맞는 코드
  );
};
