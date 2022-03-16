
window.onclick = e => {
    if (e.target.nodeName == 'LI')
        renderItems(e.target.innerText)
}
window.onload = () => { renderItems('O') }

function renderItems(tex) {
    let Var1 = document.getElementById('items');
    Var1.innerHTML = "";
    let newList = [];
    if (tex == 'All' || tex[0] == 'O') {

        newList = menuItems;
    }
    else if (tex == 'Lunch') {
        newList = menuItems.filter((item) => { return item.type == 'Lunch' })
    }
    else if (tex == 'BreakFast') {
        newList = menuItems.filter((item) => { return item.type == 'Breakfast' })
    }

    else if (tex == 'Shakes') {
        newList = menuItems.filter((item) => { return item.type == 'Shakes' })
    }

    else if (tex == 'Dinner') {
        newList = menuItems.filter((item) => { return item.type == 'Dinner' })
    }
    for (let i = 0; i <= newList.length; i++) {
        Var1.innerHTML += `<div class="d-flex" style="background-color: 361500;margin-top: 20px; border-radius : 10px; border: 2px solid black; height: max-content ; width: 40%;">
        
        <img  style = "margin:auto; height: 100% ; width: 30%;  object-fit:contain;" src="${newList[i].img}" alt="" srcset="">
        <div style=" color: CC9544 ; margin-left: 10px  height: 100% ; width: 60%;">
            <div>
                <h1>${newList[i].title}</h1>
            </div>
            <div>
                <p>Type : ${newList[i].type}</p>
            </div>

            <div>
                <p>${newList[i].Description}</p>
            </div>

        </div>
    </div>`

    }

}

let menuItems = [
    {
        img: './images/photo-1540189549336-e6e99c3679fe.jpg',
        title: 'Mint Margarita',
        type: 'Lunch',
        Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa commodi incidunt ipsum officiis quod molestiae repudiandae eum optio consectetur recusandae praesentium libero, voluptate veritatis reiciendis aperiam odio, doloremque aliquid.'
    },
    {
        img: './images/download.jpg',
        title: 'Mint Margarita',
        type: 'Lunch',
        Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa commodi incidunt ipsum officiis quod molestiae repudiandae eum optio consectetur recusandae praesentium libero, voluptate veritatis reiciendis aperiam odio, doloremque aliquid.'
    },
    {
        img: './images/photo-1540189549336-e6e99c3679fe.jpg',
        title: 'Mint Margarita',
        type: 'Lunch',
        Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa commodi incidunt ipsum officiis quod molestiae repudiandae eum optio consectetur recusandae praesentium libero, voluptate veritatis reiciendis aperiam odio, doloremque aliquid.'
    },
    {
        img: './images/photo-1540189549336-e6e99c3679fe.jpg',
        title: 'Mint Margarita',
        type: 'Breakfast',
        Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa commodi incidunt ipsum officiis quod molestiae repudiandae eum optio consectetur recusandae praesentium libero, voluptate veritatis reiciendis aperiam odio, doloremque aliquid.'
    },
    {
        img: './images/photo-1540189549336-e6e99c3679fe.jpg',
        title: 'Mint Margarita',
        type: 'Breakfast',
        Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa commodi incidunt ipsum officiis quod molestiae repudiandae eum optio consectetur recusandae praesentium libero, voluptate veritatis reiciendis aperiam odio, doloremque aliquid.'
    },
    {
        img: './images/download.jpg',
        title: 'Mint Margarita',
        type: 'Shakes',
        Description: 'uod molestiae repudiandae eum optio consectetur recusandae praesentium libero, voluptate veritatis reiciendis aperiam odio, doloremque aliquid.'
    },
    {
        img: './images/photo-1540189549336-e6e99c3679fe.jpg',
        title: 'Mint Margarita',
        type: 'Shakes',
        Description: 'Lorem, ipsum dpsum officiis quod molestiae repudiandae eum optio consectetur recusandae praesentium libero, voluptate veritatis reiciendis aperiam odio, doloremque aliquid.'
    },
    {
        img: './images/photo-1540189549336-e6e99c3679fe.jpg',
        title: 'Mint Margarita',
        type: 'Dinner',
        Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa commodi incidunt ipsum officiis quod molestiae repudiandae eum optio consectetur recusandae praesentium libero, voluptate veritatis reiciendis aperiam odio, doloremque aliquid.'
    }
]

