const projects = [
  {
    id: 'proj-1',
    title: 'Multi-Post Stories 1',
    image: '/images/proj-img.png',
    imageclass:'img-1-3',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['html', 'Css', 'Ruby','Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index:0
  },
  {
    id: 'proj-2',
    title: 'Multi-Post Stories',
    image: '/images/proj-img.png',
    imageclass:'img-2-4',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Javascript','Rails'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index:1
  },
  {
    id: 'proj-3',
    title: 'Multi-Post Stories',
    image: '/images/proj-img.png',
    imageclass:'img-1-3',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Ruby','Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index:2
  },
  {
    id: 'proj-4',
    title: 'Multi-Post Stories',
    image: '/images/proj-img.png',
    imageclass:'img-2-4',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Javascript','Ruby'],
    firstButton: 'See Live',
    secondButton: 'See Source',
    index:3
  },
];
const projContainer = document.querySelector('.grid-container');
projects.forEach((project) => {
  //alert()
  const container = document.createElement('div');
  container.innerHTML =`
  <div class="${project.id}">
                <div class="proj-img">
                    <img src="${project.image}" alt="Project Screen Shot" class="${project.imageclass}">
                </div>
                <div class="proj-det">
                    <div class="proj-info">
                        <div class="proj-title">
                            <h3>${project.title}</h3>
                    </div>
                    <div class="proj-desc">
                        <p class="project-desc-p">
                            ${project.description}
                          </p>
                    </div>
                    </div>
                    <div class="">
                        <ul class="proj-tech">
                            <li class="border-class">${project.technologyList[0]}</li>
                            <li class="border-class">${project.technologyList[1]}</li>
                            <li class="border-class">${project.technologyList[2]}</li>
                            <li class="noborder">${project.technologyList[3]}</li>
                        </ul>  
                    </div>
                    <div class="proj-btn">
                        <button id="${project.id}" type="button" class="btn btn-primary">See Project</button>
                    </div>
                </div>
            </div>
  `;
  //alert(container);
  projContainer.appendChild(container);
  const btn = document.getElementById(project.id);
  btn.addEventListener('click', () => {
    displayPopup(project.index)
  });
  
});
 const popupWindow = document.querySelector('.projec-detail');
 
function displayPopup(param) {
  popupWindow.style.display = "block";
  showInnerItems(param);
}

 
function showInnerItems(index){
  const popupheader = document.createElement('div');
  popupheader.innerHTML =`
  <div class="project-popup">
  <div class="popup-header">
      <h3 class="popup-title">${projects[index].title}</h3>
      <i id="closer" class="fa fa-times"></i>
  </div>
  <div class="popup-img">
      <img src="images/popup-img.png" alt="Project Screen Shot" />
  </div>
  <div class="popup-project-detail">
      <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.
      </p>
      
  </div>
  <div class="popup-technologies">
      <ul class="proj-tech">
          <li class="border-class">html</li>
          <li class="border-class">Ruby on rails</li>
          <li class="border-class">css</li>
          <li class="border-class">Github</li>
      </ul>
  </div>
  <div class="popup-footer">
      <button class="popup-btn">See Live <img src="/images/live-icon.png" ></button>
      <button class="popup-btn">See Source <i class="fab fa-github"></i></button>
  </div>
</div>
    `;
    popupWindow.appendChild(popupheader);
    const closer = document.getElementById("closer");
    closer.addEventListener('click', () => {
      popupWindow.removeChild(popupheader);
    });
}
