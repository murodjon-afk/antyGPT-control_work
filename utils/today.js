export function createTodosDay(item) {

    const day = document.querySelector('.day-task');
    const tomorrow = document.querySelector('.tomorrow-task');
    const later = document.querySelector('.later-task');
    const navBtn1 =document.querySelector('.nav-button1')
    const navBtn2 =document.querySelector('.nav-button2')
    const card = document.createElement('div');
    const forday1 = document.querySelector('.forday1')
    const tomorrowParent = document.querySelector('.tomorrows')
    const latersParent = document.querySelector('.Laters')
    card.className = 'card';


  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'card-input';
    checkbox.checked = item.completed;
    card.appendChild(checkbox);

    const content = document.createElement('div');
    content.className = 'card-content';
    checkbox.addEventListener('change', (event) => {
        const completed = event.target.checked; 
        fetch(`http://localhost:3001/todos/${item.id}`, {
            method: 'PATCH',
            body: JSON.stringify({ completed }), 
        })}  )
  
    const cardTitle = document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.textContent = 'Buy S Plaid!';


    const cardDescription = document.createElement('p');
    cardDescription.className = 'card-description';
    cardDescription.textContent = item.title;
    const textTodos =document.querySelector('.section-title')
    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';

    if (item.left === 0) {
        cardFooter.textContent = 'Today';
        day.appendChild(card); 
    } else if (item.left === 1) {
        cardFooter.textContent = 'Tomorrow';
        tomorrow.appendChild(card);
    } else {
        cardFooter.textContent = 'Later';
        later.appendChild(card); 
       

    }
  const teskInfo = document.querySelector('.tasks-info')
    navBtn2.onclick =()=>{
        navBtn2.style.color = '#f3c730';
        navBtn1.style.color = 'grey';
        forday1.textContent = ''
        textTodos.textContent ='ONLY TODAY TODOS'
        teskInfo.textContent = '';
        latersParent.style.display = 'none'
        tomorrowParent.style.display = 'none'

    }

    navBtn1.onclick =()=>{
        navBtn2.style.color = 'grey';
        navBtn1.style.color = '#f3c730';
        forday1.textContent = 'For Today - 5'
        textTodos.textContent ='ALL TODOS'
        teskInfo.textContent = 'HI, YOU HAVE 25 UNDONE TASKS';
        latersParent.style.display = 'grid'
        tomorrowParent.style.display = 'grid'
        
    }

 
    content.appendChild(cardTitle);
    content.appendChild(cardDescription);
    content.appendChild(cardFooter);
    card.appendChild(content);
}
