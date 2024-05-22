window.onload = function () {
  document.getElementById('click').onclick = function () {
    fetch('https://splendid-magpie-shun-app-6658d34a.koyeb.app/lessonOne').then((res) => {
      console.log(res.json());
    });
  };
};
