import React from "react";

export default function Introduce(props) {
  return (
    <>
      <li className="p-36" id="Introduce" name="Introduce">
        <article className="mb-10">
          <p className="font-bold text-3xl x:whitespace-pre-wrap">
            웹 애플리케이션의 보안 취약점을 식별하고
          </p>
          <p className="font-bold text-3xl xl:whitespace-pre-wrap">
            이를 간단히 해결해보세요.
          </p>
        </article>
        <article className="text-gray-600">
          <p>YourCode-X는 간단한 URL 입력만으로</p>
          <p>보안 취약성을 식별하고 해결할 수 있도록</p>
          <p>정확하고 신뢰성있는 정보를 제공합니다.</p>
        </article>
      </li>
    </>
  );
}
