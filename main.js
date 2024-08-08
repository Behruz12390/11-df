let a = document.querySelector('.but')
a.addEventListener('click', function () {
    const taskInput = document.querySelector('.inp');
    const taskList = document.querySelector('.ul');


    if (taskInput.value) {
        const li = document.createElement('li');
        const v = document.createElement('button');
        v.classList = 'ss'
        v.textContent = '✓'
        v.addEventListener('click', function (e) {
            e.target.style.backgroundColor = 'red'
            e.target.nextElementSibling.style.textDecoration = 'line-through'
        })
        li.innerHTML = `
            <span class="cv">${taskInput.value}</span>
        `;
        li.prepend(v)
        taskList.appendChild(li);
        taskInput.value = ''
    }
})