'use strict';

(function(){
    var t = document.getElementById('buttonOne');
    var ipt = document.getElementById('myInput');
    t.addEventListener('click', addElement, false);

    var ull = document.getElementById('todo');

    var totalNum = document.getElementById('total');
    var finishedNum = document.getElementById('finished');
    var unfinishedNum = document.getElementById('unfinished');

    function addElement(){
        var newLi = document.createElement('li');
        newLi.innerHTML = '<input type="checkbox" /> ' + ipt.value + '<button>삭제</button>';
        newLi.addEventListener('click', function(ev){
            var input = this.getElementsByTagName('input')[0];
            var input2 = this.getElementsByTagName('button')[0];

            if(ev.target.tagName !=='INPUT'){
                input.checked = !input.checked;
            }   

            if(input.checked){
                this.className = 'complete';
            }
            else this.className = '';

            input2.addEventListener('click', function(ev){
                var rm = document.getElementsByTagName('li');
                rm.parentNode.removeChild(rm);
                ev.stopPropagation();

                var addtotalNum = ull.querySelectorAll('li').length;
                var addfinishNum = ull.querySelectorAll('.complete').length;
                var addunfinishNum = addtotalNum - addfinishNum;

                totalNum.textContent = '전체: ' + addtotalNum;
                unfinishedNum.textContent = '미완료: ' + addunfinishNum;
                finishedNum.textContent = '완료: ' + addfinishNum;
            }, false);
            ev.stopPropagation();
        }, false);
        
        /*
        newLi.getElementsByTagName('input')[0].addEventListener(
            'click',function(ev){
                ev.stopPropagation();
            }, false);
        */

        ull.appendChild(newLi);


        var addtotalNum = ull.querySelectorAll('li').length;
        var addfinishNum = ull.querySelectorAll('.complete').length;
        var addunfinishNum = addtotalNum - addfinishNum;

        totalNum.textContent = '전체: ' + addtotalNum;
        unfinishedNum.textContent = '미완료: ' + addunfinishNum;
        finishedNum.textContent = '완료: ' + addfinishNum;
    }

    document.getElementById('counter').addEventListener('click', function(ev){
        switch(ev.target.id){
            case 'complete':
                list.className = 'hideIncomplete';
            case 'incomplete':
                list.className = 'hideComplete';
        }
    })
})();
