import React from "react";

const Footer = () => {
  const footerMenu = [
    "여성",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "스포츠",
    "Sale",
  ];

  const corporateInfo = [
    "H&M 채용정보",
    "H&M 회사소개",
    "H&M Group 지속가능성",
    "언론",
    "IR정보",
    "Corporate governance",
  ];

  const support = [
    "고객서비스",
    "내 계정",
    "매장 찾기",
    "개인정보 처리방침",
    "문의하기",
    "기프트카드",
    "사기 신고",
    "쿠키 설정",
  ];
  return (
    <div className="footer">
      <ul>
        카테고리
        {footerMenu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        기업 정보
        {corporateInfo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        고객 지원
        {support.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
