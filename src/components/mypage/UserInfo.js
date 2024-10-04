import React from 'react';
import {
  InfoContent,
  InfoLabel,
  InfoLine,
  InfoText,
  InfoTitle,
  MyPageUserInfo,
} from 'styles/MyPage-styled';

const UserInfo = ({ name, sid, phoneNum }) => {
  const userInfo = [
    { label: '이름', text: name },
    { label: '학번', text: sid },
    { label: '전화 번호', text: phoneNum },
  ];
  return (
    <MyPageUserInfo>
      <InfoTitle>내 정보</InfoTitle>
      <InfoContent>
        {userInfo.map((el, index) => (
          <InfoLine key={index}>
            <InfoLabel>{el.label}</InfoLabel>
            <InfoText>{el.text}</InfoText>
          </InfoLine>
        ))}
      </InfoContent>
    </MyPageUserInfo>
  );
};

export default UserInfo;
