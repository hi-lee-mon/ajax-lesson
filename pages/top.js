const css = `
<style>
.header {
  display:flex;
  align-items:center;
  flex:1;
  justify-content:space-between;
  border-bottom:1px solid #71717a;
  margin-bottom: 20px;
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem/* 32px */;
  padding-left: 2rem/* 32px */;
}
@media (min-width: 1400px) {
  .container {
    color:#3f3f46;
    max-width: 1400px;
  }
}
.github {
  padding-right: 40px;
}
.lessons {
  display:flex;
  flex-direction:column;
  gap:20px;
}
</style>
`;

const topPage = `
  ${css}
  <div class="container">
    <header class="header">
      <h1>Ajax研修課題API</h1>
      <a class="github" href="https://github.com/hi-lee-mon/ajax-lesson" target="_blank" alt="GitHubリンクアイコン" >
        <img src="/github.svg" width="32" height="32">
      </a>
    </header>
    <section class="lessons">
      <a href="/practiceOne">Ajax練習1</a>
      <a href="/practiceTwo">Ajax練習2</a>
      <a href="/practiceTwoPlus">Ajax練習2+</a>
      <a href="/lessonOne">課題1</a>
      <form action="/lessonTwo" method="post">
        <button>課題2</button>
      </form>
      <a href="/lessonThree">課題3</a>
    </section>
  </div>
`;

module.exports = topPage;
