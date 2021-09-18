var no_of_cards = 0;
var ch = [];
        document.getElementById('input_text').addEventListener('keypress', function(event){
            if(event.keyCode === 13){
                let value = document.getElementById('input_text').value;
                document.getElementById('input_text').value = "";
                if(value != ""){
                    const card_container = document.createElement("div");
                    card_container.id = "card_"+no_of_cards+"_container";
                    card_container.className = "card_container";

                    const card = document.createElement("div");
                    card.id = "card_"+no_of_cards;
                    card.draggable = "true";
                    card.className = "cards";
                    

                    const radio = document.createElement("input");
                    radio.type = "radio";
                    radio.className = "rb";
                    radio.id = "rb_"+no_of_cards;
                    

                    const card_text = document.createElement("div");
                    card_text.className = "cards_text";
                    

                    const card_text_t = document.createElement("div");
                    card_text_t.className = "card_text_t";
                    card_text_t.innerText = value;

                    const cross = document.createElement("div");
                    cross.className= "cross";
                    cross.innerHTML += "<i class='fal fa-times'></i>";

                    card_text.appendChild(card_text_t);
                    card_text.appendChild(cross);
                    

                    card.appendChild(radio);
                    card.appendChild(card_text);
                    

                    card_container.appendChild(card);
                    

                    
                    document.getElementById("all_cards_container").appendChild(card_container);

                    card.addEventListener("click", function() {
                        document.getElementById(radio.id).click();
                    });

                    card.addEventListener("dragstart", function(event){
                        drag(event, card.parentElement.id);
                    });

                    card_container.addEventListener("dragover", function(event){
                        allowDrop(event);
                    });

                    card_container.addEventListener("drop", function(event){
                        drop(event, card_container.id);
                    });

                    cross.addEventListener("click", function(event){
                        event.stopPropagation();
                        event.target.parentElement.parentElement.parentElement.parentElement.style.marginLeft = "100%";
                        setTimeout(() => {
                            document.getElementById('all_cards_container').removeChild(cross.parentElement.parentElement.parentElement);
                            f1();
                        }, 500);
                    });

                    card.addEventListener("mouseover", function(){
                        console.log("Mouse over");
                        cross.style.visibility = "visible";
                    });

                    card.addEventListener("mouseleave", function(){
                        console.log("Mouse off");
                        cross.style.visibility = "hidden";
                    });


                    radio.addEventListener('click', function (event){
                        let a = JSON.parse(window.localStorage.getItem('chores'));
                        for(let i=0;i<a.length;i++){
                            console.log(event.target.parentElement.id)
                            if(a[i].name == event.target.parentElement.id){
                                console.log(a[i].name);
                                a[i].status = 'checked';
                                console.log(a[i].status);
                            }
                        }
                        window.localStorage.setItem('chores', JSON.stringify(a));
                    });

                    card_text_t.style = "cursor:pointer";
                    card_text_t.title = "Edit";
                    card_text_t.addEventListener("click",(event)=>{
                        let val = event.target.innerText;
                        let txt = event.target;
                        let pe = event.target.parentElement;
                        const inp = document.createElement("input");
                        inp.type = "text";
                        inp.value = val;
                        inp.style = "border: 1px solid #f6d327;font-size:17px;";
                        inp.addEventListener("click",(event)=>{
                            event.stopPropagation();
                        });
                        inp.addEventListener("keypress", (event)=>{
                            if(event.keyCode === 13){
                                txt.innerText = inp.value;
                                pe.replaceChild(txt, inp);
                                f20();
                            }
                        });
                        event.target.parentElement.replaceChild(inp, event.target);
                        inp.focus();
                        event.stopPropagation();
                    });

                    ch.push({name: card.id, value: value, status: 'unchecked'});
                    no_of_cards += 1;
                    window.localStorage.setItem('chores', JSON.stringify(ch));
                    
                    f1();
                }
            }
        });

        

function f10(){
    if(JSON.parse(window.localStorage.getItem("chores"))!=null){
        ch = JSON.parse(window.localStorage.getItem("chores"));
    }
    let b = 0;
    for(let i=0;i<ch.length;i++){
        let value = ch[i].value;
        const card_container = document.createElement("div");
        card_container.id = "card_"+b+"_container";
        card_container.className = "card_container";
        

        const card = document.createElement("div");
        card.id = "card_"+b;
        card.draggable = "true";
        card.className = "cards";
        

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.className = "rb";
        radio.id = "rb_"+b;

        if(ch[i].status === 'checked')
            radio.checked = true;
        

        const card_text = document.createElement("div");
        card_text.className = "cards_text";
        

        const card_text_t = document.createElement("div");
        card_text_t.className = "card_text_t";
        card_text_t.innerText = value;

        const cross = document.createElement("div");
        cross.className= "cross";
        cross.innerHTML += "<i class='fal fa-times'></i>";

        card_text.appendChild(card_text_t);
        card_text.appendChild(cross);
        

        card.appendChild(radio);
        card.appendChild(card_text);
        

        card_container.appendChild(card);
        

        
        document.getElementById("all_cards_container").appendChild(card_container);

        card.addEventListener("click", function() {
            document.getElementById(radio.id).click();
        });

        card.addEventListener("dragstart", function(event){
            drag(event, card.parentElement.id);
        });

        card_container.addEventListener("dragover", function(event){
            allowDrop(event);
        });

        card_container.addEventListener("drop", function(event){
            drop(event, card_container.id);
        });

        cross.addEventListener("click", function(event){
            event.stopPropagation();
            event.target.parentElement.parentElement.parentElement.parentElement.style.marginLeft = "100%";
            setTimeout(() => {
                document.getElementById('all_cards_container').removeChild(cross.parentElement.parentElement.parentElement);
                f1();
            }, 500);
        });

        card.addEventListener("mouseover", function(){
            console.log("Mouse over");
            cross.style.visibility = "visible";
        });

        card.addEventListener("mouseleave", function(){
            console.log("Mouse off");
            cross.style.visibility = "hidden";
        });

        radio.addEventListener('click', function (event){
            let a = JSON.parse(window.localStorage.getItem('chores'));
            for(let i=0;i<a.length;i++){
                console.log(event.target.parentElement.id)
                if(a[i].name == event.target.parentElement.id){
                    console.log(a[i].name);
                    a[i].status = 'checked';
                    console.log(a[i].status);
                }
            }
            window.localStorage.setItem('chores', JSON.stringify(a));
        });

        card_text_t.style = "cursor:pointer";
        card_text_t.title = "Edit";
        card_text_t.addEventListener("click",(event)=>{
            let val = event.target.innerText;
            let txt = event.target;
            let pe = event.target.parentElement;
            const inp = document.createElement("input");
            inp.type = "text";
            inp.value = val;
            inp.style = "border: 1px solid #f6d327;font-size:17px";
            inp.addEventListener("click",(event)=>{
                event.stopPropagation();
            });
            inp.addEventListener("keypress", (event)=>{
                if(event.keyCode === 13){
                    txt.innerText = inp.value;
                    pe.replaceChild(txt, inp);
                    f20();
                }
            });
            event.target.parentElement.replaceChild(inp, event.target);
            inp.focus();
            event.stopPropagation();
        });
        
        f1();

        b++;
    }
}
