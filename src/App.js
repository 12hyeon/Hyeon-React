import "./styles.css";
import React from "react";
import { useState } from "react";

function Box() {
  // 제품마다 state 줘서 card 클릭시 해당 내용만 중앙에 배치
  return (
    <div class="card">
      <a href="/" class="btn-primary">
        <img class="card-img-top" src="/" alt="제품 이미지"></img>
        <div class="card-body">
          <h3 class="card-title">제품명</h3>
          123,456원
        </div>
      </a>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div id="l_header">
        <ul>
          <li>
            <img scr=""></img>
          </li>
          <li>DKU마켓</li>
          <li>
            <input
              id="search"
              placeholder="동네 이름, 물품명 등을 검색해보세요!"
            ></input>
          </li>
        </ul>
      </div>
      <div id="r_header">
        <div class="btn">
          <ul>
            <li>
              <a class="login" href="/">
                <strong>로그인</strong>
              </a>
            </li>
            <li>
              <a class="signup" href="/">
                <strong>회원가t입</strong>
              </a>
            </li>
            <li>
              <a class="write" href="/">
                <strong>글쓰기</strong>
              </a>
            </li>
            <li>
              <a class="list" href="/">
                <strong>리스트</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

function Create() {
  return (
    <div id="board_write">
      <h1>
        <a href="/main.php">물품명</a>
      </h1>
      <br></br>
      <h4>게시글을 수정합니다.</h4>
      <div id="write_area">
        <form action="modify_ok.php?idx=<?php echo $rno; ?>" method="post">
          <div id="in_title">
            <textarea
              name="title"
              id="utitle"
              rows="1"
              cols="55"
              placeholder="제목"
              maxlength="100"
              required
            ></textarea>
          </div>
        </form>
      </div>
      <div class="wi_line"></div>
      <div id="in_name">
        <textarea
          name="name"
          id="uname"
          rows="1"
          cols="55"
          placeholder="학번"
          maxlength="100"
          required
        ></textarea>
      </div>
      <div class="wi_line"></div>
      <div id="in_content">
        <textarea
          name="content"
          id="ucontent"
          placeholder="내용"
          required
          style="font-size: 24px;"
        ></textarea>
      </div>
      <div class="bt_se">
        <button type="submit">글 저장</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div class="l_footer">
        <b>DKU마켓</b>
      </div>
      <div class="r_footer">
        경기 용인시 수지구 죽전로 152 단국대학교 소프트웨어학과 (ICT관 501호)
        <br></br>
        Copyrightⓒ  Opensource Team Project. All Rights Reserved.
      </div>
    </footer>
  );
}

function Boxes() {
  return (
    <div class="board">
      <h2>최근 등록된 상품</h2>
      <div class="boxes">
        <ul>
          <li>
            <Box></Box>
          </li>
          <li>
            <Box></Box>
          </li>
        </ul>
      </div>
      <div class="btn_push">
        <input type="button" value="제품 올리기"></input>
        if (state == "push") {}
        <Create></Create>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
    </div>
  );
}
export default App;
