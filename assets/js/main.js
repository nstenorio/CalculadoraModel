// Java Calculator

function CreateCalculator() {
    return {
        display: document.querySelector('.display'),

        Initialing() {
            this.ClickButtons();
            this.PressEnter();
            this.PressDel();

        },  

        PressDel() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 46) {
                    this.ClearDisplay();
                }
            });
        },

        PressEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.CalcValues();
                }
            });
        },
        
        ClearDisplay() {
            this.display.value = '';
        },

        DelLast() {
            this.display.value = this.display.value.slice(0, -1);
        },

        CalcValues() {
            let Calc = this.display.value;

            try {
                Calc = eval(Calc);

            if(!Calc) {
                alert('Conta inválida');
            return;
            }

            this.display.value = String(Calc);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },               

        ClickButtons() {
            // This --> Calculator
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                };

                if(el.classList.contains('btn-clear')) {
                    this.ClearDisplay();
                };

                if(el.classList.contains('btn-del')) {
                    this.DelLast();
                };

                if(el.classList.contains('btn-eq')) {
                    this.CalcValues();
                };
            });
        },

        btnForDisplay(Value) {
            this.display.value += Value;
        }





    };
}

const Calculator = CreateCalculator();
Calculator.Initialing();