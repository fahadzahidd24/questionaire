// const plus = document.querySelectorAll('.btn')
// const answer = document.querySelectorAll('.answer')
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer')

questions.forEach((q)=>{
    let btn = q.querySelector('.btn');
    btn.addEventListener('click',()=>{
        btn.firstElementChild.classList.toggle('fa-plus');
        btn.lastElementChild.classList.toggle('fa-minus');

        answers.forEach((ans)=>{
            if(ans.parentElement==q){
                ans.classList.toggle('block')
            }
            
        })
    })
})


// plus.forEach((ques)=>{
//    let btn = ques.querySelectorAll('.qs')

//    btn.addEventListener('click',()=>{
//     plus.forEach((item)=>{
//         if(item!==plus){
//             item.classList.remove('block')
//         }
//         else{
//             item.classList.toggle('block')
//         }
//     })
//    }) 
// })