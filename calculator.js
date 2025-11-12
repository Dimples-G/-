     let res="";
        function update(s){
            res+=s;
            display();
        }
        function display(){
            document.querySelector(`p`).innerText=`${res}`;
        }
        function result(){
            try{res=eval(res);
                if(!isFinite(res)){
                    res="Infinity";
                }
                display();
            }
            catch(e){
                res="Error";
                display();
        
            }
            
            
        }
        function clear1(){
            res="";
            display();
        }