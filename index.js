const twoPlayers = document.querySelector(".btn2")
const againstIA = document.querySelector(".btnia")
const box = document.querySelectorAll(".box")
const box1 = document.querySelector("#box1")
const box2 = document.querySelector("#box2")
const box3 = document.querySelector("#box3")
const box4 = document.querySelector("#box4")
const box5 = document.querySelector("#box5")
const box6 = document.querySelector("#box6")
const box7 = document.querySelector("#box7")
const box8 = document.querySelector("#box8")
const box9 = document.querySelector("#box9")
const x = document.querySelector(".x")
const ball = document.querySelector(".ball")
let player1 = 0
let player2 = 0
const scoreX = document.querySelector(".span_scorex")
const scoreBall = document.querySelector(".span_scoreball")
let xscore = parseInt(scoreX.textContent)
let ballScore = parseInt(scoreBall.textContent)
const velha = document.querySelector(".velha")
const winner1 = document.querySelector(".winner1")
const winner2 = document.querySelector(".winner2")

twoPlayers.addEventListener("click", function(){
    twoPlayers.style.display = "none"
    againstIA.style.display = "none"
    for(c=0; c<box.length; c+=1){
        box[c].addEventListener("click", function(){
            const cloneX = x.cloneNode(true) 
            const cloneBall = ball.cloneNode(true)
            const div = document.createElement("div")
            if(this.childNodes.length == 0 && player1 == player2){
                this.classList.add("mark-x")
                this.appendChild(div)
                div.appendChild(cloneX)
                div.classList.add("new-div")
                player1 += 1
            }
            else if(this.childNodes.length == 0 && player1 != player2){
                const div = document.createElement("div")
                this.classList.add("mark-o")
                this.appendChild(div)
                div.appendChild(cloneBall)
                div.classList.add("new-div")
                player2 += 1
                
            }

            if(box1.className.includes("mark-x") && box2.className.includes("mark-x") && box3.className.includes("mark-x") || box4.className.includes("mark-x") && box5.className.includes("mark-x") && box6.className.includes("mark-x")){
                winner1.style.display = "inline"
                xscore += 1                
                scoreX.textContent = xscore
                player1 = 0
                player2 = 0
                let c = 0;
                while(true){
                    if(box[c].childNodes.length != 0){
                        const arrayDiv = document.querySelectorAll(".new-div")
                        for(n=0; n<arrayDiv.length; n+=1){
                            box[c].removeChild(arrayDiv[n])
                            box[c].classList.remove("mark-x")
                            box[c].classList.remove("mark-o")
                            break
                        }
                        c = c + 1
                    }else if(box[c].childNodes.length == 0){
                        c = c + 1
                    } 
                    else if(c==9){
                        break
                    } 
                    setTimeout(() => {
                        winner1.style.display = "none"
                       }, 2000)                 
                }
                
            }
            else if(box7.className.includes("mark-x") && box8.className.includes("mark-x") && box9.className.includes("mark-x") || box1.className.includes("mark-x") && box4.className.includes("mark-x") && box7.className.includes("mark-x")){
                winner1.style.display = "inline"
                xscore += 1                
                scoreX.textContent = xscore
                player1 = 0
                player2 = 0
                let c = 0;
                while(true){
                    if(box[c].childNodes.length != 0){
                        const arrayDiv = document.querySelectorAll(".new-div")
                        for(n=0; n<arrayDiv.length; n+=1){
                            box[c].removeChild(arrayDiv[n])
                            box[c].classList.remove("mark-x")
                            box[c].classList.remove("mark-o")
                            break
                        }
                        c = c + 1
                    }else if(box[c].childNodes.length == 0){
                        c = c + 1
                    } 
                    else if(c==9){
                        break
                    }
                    setTimeout(() => {
                        winner1.style.display = "none"
                       },2000)                        
                }
                
            }
            else if(box2.className.includes("mark-x") && box5.className.includes("mark-x") && box8.className.includes("mark-x") || box3.className.includes("mark-x") && box6.className.includes("mark-x") && box9.className.includes("mark-x")){
                winner1.style.display = "inline"
                xscore += 1                
                scoreX.textContent = xscore
                player1 = 0
                player2 = 0
                let c = 0;
                while(true){
                    if(box[c].childNodes.length != 0){
                        const arrayDiv = document.querySelectorAll(".new-div")
                        for(n=0; n<arrayDiv.length; n+=1){
                            box[c].removeChild(arrayDiv[n])
                            box[c].classList.remove("mark-x")
                            box[c].classList.remove("mark-o")
                            break
                        }
                        c = c + 1
                    }else if(box[c].childNodes.length == 0){
                        c = c + 1
                    } 
                    else if(c==9){
                        break
                    }
                    setTimeout(() => {
                        winner1.style.display = "none"
                       },2000)                     
                }
                
            }
            else if(box1.className.includes("mark-x") && box5.className.includes("mark-x") && box9.className.includes("mark-x") || box3.className.includes("mark-x") && box5.className.includes("mark-x") && box7.className.includes("mark-x")){
                winner1.style.display = "inline"
                xscore += 1                
                scoreX.textContent = xscore
                player1 = 0
                player2 = 0
                let c = 0;
                while(true){
                    if(box[c].childNodes.length != 0){
                        const arrayDiv = document.querySelectorAll(".new-div")
                        for(n=0; n<arrayDiv.length; n+=1){
                            box[c].removeChild(arrayDiv[n])
                            box[c].classList.remove("mark-x")
                            box[c].classList.remove("mark-o")
                            break
                        }
                        c = c + 1
                    }else if(box[c].childNodes.length == 0){
                        c = c + 1
                    } 
                    else if(c==9){
                        break
                    } 
                    setTimeout(() => {
                        winner1.style.display = "none"
                       },2000)                     
                }
                
            }
            else if(box1.className.includes("mark-o") && box2.className.includes("mark-o") && box3.className.includes("mark-o") || box4.className.includes("mark-o") && box5.className.includes("mark-o") && box6.className.includes("mark-o")){
                player1 = 0;
                player2 = 0
                winner2.style.display = "inline"
                ballScore += 1                
                scoreBall.textContent = ballScore
                let c = 0;
                while(true){
                    if(box[c].childNodes.length != 0){
                        const arrayDiv = document.querySelectorAll(".new-div")
                        for(n=0; n<arrayDiv.length; n+=1){
                            box[c].removeChild(arrayDiv[n])
                            box[c].classList.remove("mark-x")
                            box[c].classList.remove("mark-o")
                            break
                        }
                        c = c + 1
                    }else if(box[c].childNodes.length == 0){
                        c = c + 1
                    } 
                    else if(c==9){
                        break
                    }
                    setTimeout(() => {
                        winner2.style.display = "none"
                       },2000)                             
                }
                
            }
            else if(box7.className.includes("mark-o") && box8.className.includes("mark-o") && box9.className.includes("mark-o") || box1.className.includes("mark-o") && box4.className.includes("mark-o") && box7.className.includes("mark-o")){
                winner2.style.display = "inline"
                ballScore += 1                
                scoreBall.textContent = ballScore
                player1 = 0
                player2 = 0
                let c = 0;
                while(true){
                    if(box[c].childNodes.length != 0){
                        const arrayDiv = document.querySelectorAll(".new-div")
                        for(n=0; n<arrayDiv.length; n+=1){
                            box[c].removeChild(arrayDiv[n])
                            box[c].classList.remove("mark-x")
                            box[c].classList.remove("mark-o")
                            break
                        }
                        c = c + 1
                    }else if(box[c].childNodes.length == 0){
                        c = c + 1
                    } 
                    else if(c==9){
                        break
                    }
                    setTimeout(() => {
                        winner2.style.display = "none"
                       },2000)                          
                }
                
            }
            else if(box2.className.includes("mark-o") && box5.className.includes("mark-o") && box7.className.includes("mark-o") || box3.className.includes("mark-o") && box6.className.includes("mark-o") && box9.className.includes("mark-o")){
                player1 = 0;
                player2 = 0
                winner2.style.display = "inline"
                ballScore += 1                
                scoreBall.textContent = ballScore
                let c = 0;
                while(true){
                    if(box[c].childNodes.length != 0){
                        const arrayDiv = document.querySelectorAll(".new-div")
                        for(n=0; n<arrayDiv.length; n+=1){
                            box[c].removeChild(arrayDiv[n])
                            box[c].classList.remove("mark-x")
                            box[c].classList.remove("mark-o")
                            break
                        }
                        c = c + 1
                    }else if(box[c].childNodes.length == 0){
                        c = c + 1
                    } 
                    else if(c==9){
                        break
                    }
                    setTimeout(() => {
                        winner2.style.display = "none"
                       },2000)                        
                }
            }
            else if(box1.className.includes("mark-o") && box5.className.includes("mark-o") && box9.className.includes("mark-o") || box3.className.includes("mark-o") && box5.className.includes("mark-o") && box7.className.includes("mark-o")){
                player1 = 0;
                player2 = 0
                winner2.style.display = "inline"
                ballScore += 1                
                scoreBall.textContent = ballScore
                let c = 0;
                while(true){
                    if(box[c].childNodes.length != 0){
                        const arrayDiv = document.querySelectorAll(".new-div")
                        for(n=0; n<arrayDiv.length; n+=1){
                            box[c].removeChild(arrayDiv[n])
                            box[c].classList.remove("mark-x")
                            box[c].classList.remove("mark-o")
                            break
                        }
                        c = c + 1
                    }else if(box[c].childNodes.length == 0){
                        c = c + 1
                    } 
                    else if(c==9){
                        break
                    } 
                    setTimeout(() => {
                        winner2.style.display = "none"
                       },2000)                        
                }
            }
            else if(box1.childNodes.length == 1 && box2.childNodes.length == 1 && box3.childNodes.length == 1 && box4.childNodes.length == 1 && box5.childNodes.length == 1 && box6.childNodes.length == 1 && box7.childNodes.length == 1 && box8.childNodes.length == 1 && box9.childNodes.length == 1){
               velha.style.display = "inline"
               player1 = 0;
               player2 = 0
               const arrayDiv = document.querySelectorAll(".new-div")
               for(c=0; c<box.length; c+=1){
                    box[c].removeChild(arrayDiv[c])
                    box[c].classList.remove("mark-x")
                    box[c].classList.remove("mark-o")
               }
               setTimeout(() => {
                velha.style.display = "none"
               },2000)
            }
        })
    }
    
})

againstIA.addEventListener("click", function(){
    twoPlayers.style.display = "none"
    againstIA.style.display = "none"
    for(c=0; c<box.length; c+=1){
        box[c].addEventListener("click", function(){
            const cloneX = x.cloneNode(true) 
            const cloneBall = ball.cloneNode(true)
            const div = document.createElement("div")
            if(this.childNodes.length == 0){
                this.classList.add("mark-x")
                this.appendChild(div)
                div.appendChild(cloneX)
                div.classList.add("new-div")
                for(n=0; n<box.length; n+=1){
                    if(!box[n].className.includes("mark-x")){
                        box[n].classList.add("mark-o")
                        div.appendChild(cloneBall)
                        div.removeChild()
                        break
                    }
                }
                
            }
            
        })
    }
})