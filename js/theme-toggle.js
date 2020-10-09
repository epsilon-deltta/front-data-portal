					 // 토글을 이용한 스위치 기능
                     $(document).ready(function(){
                        $('a').click(function(){
                          $('a').removeClass("active");
                          $(this).addClass("active");
                        });
                        $('button').click(function(){
                          $('body').toggleClass('dark');
                        });
                      });


                              // 테마의 컬러스킴을 셋팅할 수 있습니다.
        function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
            document.body.className =themeName;
        }

        // 라이트 모드와 다크 모드 사이의 토글 세션(로컬 스토리지)
        function toggleTheme() {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-light');
            } else {
                setTheme('theme-dark');
            }
        }

        // 초기 로드 시 테마를 설정하는 즉시 호출되는 기능
        (function () {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-dark');
            } else {
                setTheme('theme-light');
            }
        })();