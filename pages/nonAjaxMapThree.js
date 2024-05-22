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

const nonAjaxMapOnePage = `
  ${css}
  <div class="container">
    <header class="header">
      <h1>non-Ajax体験</h1>
    </header>
    <section class="lessons">
      <h1>地図003</h1>
      <a href="/">Homeページ</a>
      <img src="/003-googleMap.png" />
      <a href="/nonAjaxMap/two" style="font-size: 32px;">-</a>
    </section>
  </div>
`;

module.exports = nonAjaxMapOnePage;
