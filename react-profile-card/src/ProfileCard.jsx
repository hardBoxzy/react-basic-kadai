import React from 'react';


export function ProfileCard({ progress, setProgress, profiles }) {

        const profile = profiles[progress];

  // 進捗率を10％進める関数
  const handleProgress = () => {
    if (progress < 4) {
      setProgress(progress + 1); // 現在のprogressに10を加算
    }
    else {
      setProgress(0); // 進捗率が100％に達したらリセット
    }
  };

  return (
    <main>
      <div style={{border: '1px solid #ccc',borderRadius: '8px',padding: '16px'}}>
        <h2><strong>{profile.name}</strong></h2>
        <h4> 【年齢】{profile.age}歳</h4>
        <p>【自己紹介】{profile.bio}</p>

      </div>
        <button onClick={handleProgress}>次のプロフィール</button>
    </main>
  );
}