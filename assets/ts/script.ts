let resultDiv = document.querySelector("#result-div");
const clearBtn = document.querySelector("#clear-btn");
const solveBtn = document.querySelector("#solve-btn");
const inputBtns = document.querySelectorAll(".input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const lastOperationDiv = document.querySelector("#last-operation-div");

if(clearBtn && resultDiv && solveBtn && deleteBtn && lastOperationDiv) {
    let operation : string = "";
    let lastOperation : string = "";

    inputBtns.forEach((inputBtn) => {
        inputBtn.addEventListener("click", addInput => {
            operation += (addInput.target as HTMLInputElement).value;
            resultDiv.innerHTML = operation;
        })
    });

    solveBtn.addEventListener("click", () => {
        lastOperation = operation;
        lastOperationDiv.innerHTML = lastOperation;
        operation = eval(operation);
        resultDiv.innerHTML = operation;
    });

    deleteBtn.addEventListener("click", () => {
        operation = operation.substring(0,operation.length-1);
        resultDiv.innerHTML = operation;
    })

    clearBtn.addEventListener("click", () => {
        operation = "";
        resultDiv.innerHTML = operation;
        lastOperation = "";
        lastOperationDiv.innerHTML = lastOperation;
    });
}