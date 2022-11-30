const heads = ["id", "name","phone", "age","status"]

const addUser = document.querySelector("#addUser")
const showData = document.querySelector("#showData")

// Read User From LocalStorge
const readDataFromStorage = (itemKey="users",resType="json") =>{
    let data = localStorage.getItem(itemKey)
    if(resType=="json") {
        try{
            data = JSON.parse(data)||[]
        }
        catch(e){
            data = []
        }
    }
    return data
}


// Write User to LocalStorge
const writeDataToStorage = (data,itemKey="users")=> localStorage.setItem(itemKey, JSON.stringify(data))
if(addUser)
addUser.addEventListener("submit", (e)=>{
    e.preventDefault()
    const user = {}
    heads.forEach(h=> user[h]= addUser.elements[h].value)
    const data = readDataFromStorage()
    data.push(user)
    writeDataToStorage(data)
})

// Remove User From LocalStorge
const removeItemFromStorge = ()=> localStorage.removeItem(itemKey)

// Update Status
function updateStatus(...heads){
    if (heads.status == "inactive"){
        heads.status.replace("active" ,"inactive");
    }
    else{
        heads.status.replace("inactive" ,"active");
    }

}


if(showData){
    const data = readDataFromStorage()
    data.forEach(d=>{
        const p1 = document.createElement("p")
        p2 = document.createElement("p")
        p3 = document.createElement("p")
        p4 = document.createElement("p")
        p5 = document.createElement("p")

        p1.innerText = d.id
        p2.innerText = d.name
        p3.innerText = d.phone
        p4.innerText = d.age
        p5.innerText = d.status

        showData.appendChild(p1)
        showData.appendChild(p2)
        showData.appendChild(p3)
        showData.appendChild(p4)
        showData.appendChild(p5)
       
    })
}