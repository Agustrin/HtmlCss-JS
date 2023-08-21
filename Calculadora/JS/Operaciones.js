const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");
let bcon = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonpush = button.textContent;

        if(screen.textContent === "Error") {
            screen.textContent = "0";
        }
        if(button.className === "op" && screen.textContent=== "0") {
            return;
        } 
        if(buttonpush ==="←") {
            if(bcon <= 1) {
                screen.textContent = "0"
            } else {
                screen.textContent = screen.textContent.slice(0,-1);
                bcon--;
            }
            return;
        }
        if(buttonpush ==="C") {
            screen.textContent = "0";
            bcon=0;
            return;
        }
        if(button.id === "equal") {
            try {
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "Error"
            }
            
            return;
        }
        if (screen.textContent === "0") {
            bcon++;
            screen.textContent = buttonpush;
        } else {
            bcon++;
            screen.textContent += buttonpush;
        }
    })
})
